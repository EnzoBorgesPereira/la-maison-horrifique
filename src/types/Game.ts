export interface Game {
    id: string;
    title: string;
    description: string;
    duration: number;
    difficulty: 'Facile' | 'Moyen' | 'Difficile';
    minPlayers: number;
    maxPlayers: number;
    imageUrl: string;
}