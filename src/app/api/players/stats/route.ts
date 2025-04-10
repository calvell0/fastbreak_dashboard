import { NextResponse } from 'next/server';
import { getPlayerStats } from '@/lib/utils/playerStats';

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