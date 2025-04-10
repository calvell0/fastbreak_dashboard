import { Player } from '../types';

export const playerApi = {
  getStats: async (): Promise<Player[]> => {
    const response = await fetch('/api/players/stats');
    if (!response.ok) {
      throw new Error(`Failed to fetch player stats: ${response.statusText}`);
    }
    return response.json();
  }
}; 