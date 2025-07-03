import type { Slot } from "./Slot";

export const Difficulty = ["Facile", "Moyen", "Difficile"] as const;
export type Difficulty = (typeof Difficulty)[number];

export interface Game {
    id: string;
    title: string;
    description: string;
    duration: number;
    difficulty: Difficulty;
    price: number;
    minPlayers: number;
    maxPlayers: number;
    imageUrl: string;
    slots: Slot[];
}