import { NextResponse } from 'next/server';
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

export async function GET() {
  try {
    const players = await getPlayerStats();
    return NextResponse.json(players);
  } catch (error) {
    console.error('Error fetching player stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch player statistics' },
      { status: 500 }
    );
  }
} 