export interface PlayerStats {
  ppg: number;
  rpg: number;
  apg: number;
  mpg: number;
  spg: number;
  bpg: number;
  topg: number;
  fgp: number;
  tpp: number;
  ftp: number;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  number: number;
  stats: PlayerStats;
} 