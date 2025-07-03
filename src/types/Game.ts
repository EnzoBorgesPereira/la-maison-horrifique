import type { Slot } from "./Slot";

export interface Game {
    id: string;
    title: string;
    description: string;
    duration: number;
    difficulty: 'Facile' | 'Moyen' | 'Difficile';
    price: number;
    minPlayers: number;
    maxPlayers: number;
    imageUrl: string;
    slots: Slot[];
}