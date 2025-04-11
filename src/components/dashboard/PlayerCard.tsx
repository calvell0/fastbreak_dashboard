'use client';

interface PlayerStats {
  ppg: number;
  apg: number;
  rpg: number;
  fg: string;
  mpg: number;
}

interface PlayerCardProps {
  name: string;
  position: string;
  number: string;
  stats: PlayerStats;
}

export default function PlayerCard({ name, position, number, stats }: PlayerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#00788c] text-white p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex justify-between items-center mt-2">
          <span>{position}</span>
          <span>#{number}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-1">PPG</p>
            <p className="text-xl font-bold text-gray-900">{stats.ppg}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-1">APG</p>
            <p className="text-xl font-bold text-gray-900">{stats.apg}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-1">RPG</p>
            <p className="text-xl font-bold text-gray-900">{stats.rpg}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-1">FG%</p>
            <p className="text-xl font-bold text-gray-900">{stats.fg}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-1">MPG</p>
            <p className="text-xl font-bold text-gray-900">{stats.mpg}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 