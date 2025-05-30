export interface Player {
  id: number;
  name: string;
}

export interface Team {
  name: string;
  players: Player[];
}