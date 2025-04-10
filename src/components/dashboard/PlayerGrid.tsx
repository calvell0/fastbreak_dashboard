'use client';

import PlayerCard from './PlayerCard';
import { mockPlayers } from '@/lib/data/mockData';

export default function PlayerGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mockPlayers.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          position={player.position}
          number={player.number}
          stats={player.stats}
        />
      ))}
    </div>
  );
} 