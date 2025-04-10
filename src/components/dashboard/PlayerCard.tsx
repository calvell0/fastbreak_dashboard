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
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-gray-600 text-sm">PPG</p>
            <p className="text-xl font-bold">{stats.ppg}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">APG</p>
            <p className="text-xl font-bold">{stats.apg}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">RPG</p>
            <p className="text-xl font-bold">{stats.rpg}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">FG%</p>
            <p className="text-xl font-bold">{stats.fg}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 