import { NextResponse } from 'next/server';
import { getPlayerStats } from '@/lib/utils/playerStats';


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

export async function GET() {
  try {
    const TOP_N = 5;

    const players = await getPlayerStats();


    const leaderboards: Leaderboards = {
      points: [...players]
        .sort((a, b) => b.stats.ppg - a.stats.ppg)
        .slice(0, TOP_N)
        .map(player => ({
          name: player.name,
          value: player.stats.ppg,
          position: player.position
        })),

      rebounds: [...players]
        .sort((a, b) => b.stats.rpg - a.stats.rpg)
        .slice(0, TOP_N)
        .map(player => ({
          name: player.name,
          value: player.stats.rpg,
          position: player.position
        })),

      assists: [...players]
        .sort((a, b) => b.stats.apg - a.stats.apg)
        .slice(0, TOP_N)
        .map(player => ({
          name: player.name,
          value: player.stats.apg,
          position: player.position
        })),

      efficiency: [...players]
        .sort((a, b) => (b.stats.efficiency ?? 0) - (a.stats.efficiency ?? 0))
        .slice(0, TOP_N)
        .map(player => ({
          name: player.name,
          value: player.stats.efficiency ?? 0,
          position: player.position
        })),

      minutes: [...players]
        .sort((a, b) => b.stats.mpg - a.stats.mpg)
        .slice(0, TOP_N)
        .map(player => ({
          name: player.name,
          value: player.stats.mpg,
          position: player.position
        })),
    };

    return NextResponse.json({
      leaderboards,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error generating leaderboards:', error);
    return NextResponse.json(
      { error: 'Error generating leaderboards' },
      { status: 500 }
    );
  }
} 