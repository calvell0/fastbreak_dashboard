'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Player } from '@/lib/types';
import { playerApi } from '@/lib/api/players';


const PieChart = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Pie),
  { ssr: false }
);

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

const chartOptions = {
  points: 'Points Distribution',
  rebounds: 'Rebounds Distribution',
  assists: 'Assists Distribution',
  minutes: 'Minutes Distribution'
} as const;

type ChartKey = keyof typeof chartOptions;

const generateColors = (count: number) => {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = (i * 360) / count;
    colors.push(`hsla(${hue}, 70%, 50%, 0.8)`);
  }
  return colors;
};

export default function ChartWidget() {
  const [selectedChart, setSelectedChart] = useState<ChartKey>('points');
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await playerApi.getStats();
        setPlayers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const getChartData = () => {
    const statKey = selectedChart === 'points' ? 'ppg' :
                    selectedChart === 'rebounds' ? 'rpg' :
                    selectedChart === 'assists' ? 'apg' : 'mpg';

    const relevantPlayers = players
      .filter(player => player.stats[statKey] > 0)
      .sort((a, b) => b.stats[statKey] - a.stats[statKey]);

    const backgroundColor = generateColors(relevantPlayers.length);

    return {
      labels: relevantPlayers.map(player => player.name),
      datasets: [
        {
          data: relevantPlayers.map(player => player.stats[statKey]),
          backgroundColor,
          borderColor: backgroundColor.map(color => color.replace('0.8', '1')),
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: `${chartOptions[selectedChart]} (Per Game)`,
        font: {
          size: 16,
          weight: 'bold' as const
        }
      }
    },
    maintainAspectRatio: false
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 h-[500px] flex items-center justify-center">
          <div className="text-lg text-gray-600">Loading statistics...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 h-[500px] flex items-center justify-center">
          <div className="text-lg text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-[#1d1160] text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-wide">Statistical Breakdown</h3>
            <select
              value={selectedChart}
              onChange={(e) => setSelectedChart(e.target.value as ChartKey)}
              className="bg-white text-[#1d1160] px-4 py-1.5 rounded-md font-semibold cursor-pointer text-sm border-2 border-white hover:border-[#00788c] transition-colors"
            >
              {Object.entries(chartOptions).map(([key, label]) => (
                <option key={key} value={key} className="text-gray-800">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-6" style={{ height: '500px' }}>
          <PieChart data={getChartData()} options={options} />
        </div>
      </div>
    </div>
  );
} 