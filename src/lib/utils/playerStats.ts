import { mockPlayers } from '@/lib/data/mockData';

export async function getPlayerStats() {
  const players = mockPlayers;

  const playersWithEfficiency = players.map(player => ({
    ...player,
    stats: {
      ...player.stats,
      efficiency: Number(
        ((player.stats.ppg + player.stats.rpg + player.stats.apg) / player.stats.mpg).toFixed(2)
      )
    }
  }));

  return playersWithEfficiency;
} 