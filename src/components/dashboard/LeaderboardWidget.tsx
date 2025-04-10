'use client';

import { useEffect, useState } from 'react';

interface LeaderboardEntry {
  name: string;
  value: number;
  position: string;
}

interface Leaderboards {
  points: LeaderboardEntry[];
  rebounds: LeaderboardEntry[];
  assists: LeaderboardEntry[];
  efficiency: LeaderboardEntry[];
  minutes: LeaderboardEntry[];
}

const statOptions = {
  points: 'Points Per Game',
  rebounds: 'Rebounds Per Game',
  assists: 'Assists Per Game',
  efficiency: 'Efficiency Rating',
  minutes: 'Minutes Per Game'
} as const;

type StatKey = keyof typeof statOptions;

export default function LeaderboardWidget() {
  const [leaderboards, setLeaderboards] = useState<Leaderboards | null>(null);
  const [selectedStat, setSelectedStat] = useState<StatKey>('points');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      try {
        const response = await fetch('/api/players/leaderboards');
        if (!response.ok) throw new Error('Failed to fetch leaderboards');
        const data = await response.json();
        setLeaderboards(data.leaderboards);
        setLoading(false);
      } catch (err) {
        setError('Error loading leaderboards');
        setLoading(false);
      }
    };

    fetchLeaderboards();
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold p-4">Loading leaderboards...</div>;
  if (error) return <div className="text-center text-red-600 font-semibold p-4">Error: {error}</div>;
  if (!leaderboards) return null;

  const currentLeaders = leaderboards[selectedStat];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-[#1d1160] text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold tracking-wide">Hornets Leaders</h3>
            <select
              value={selectedStat}
              onChange={(e) => setSelectedStat(e.target.value as StatKey)}
              className="bg-white text-[#1d1160] px-4 py-1.5 rounded-md font-semibold cursor-pointer text-sm border-2 border-white hover:border-[#00788c] transition-colors"
            >
              {Object.entries(statOptions).map(([key, label]) => (
                <option key={key} value={key} className="text-gray-800">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-5">
            {currentLeaders.map((leader: LeaderboardEntry, index: number) => (
              <div key={leader.name} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold text-[#00788c] w-8">{index + 1}</span>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{leader.name}</p>
                    <p className="text-sm font-medium text-gray-600">{leader.position}</p>
                  </div>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  {selectedStat === 'efficiency' ? leader.value.toFixed(2) : leader.value.toFixed(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 