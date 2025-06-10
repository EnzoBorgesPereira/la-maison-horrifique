import type { Game } from "../types/Game";

export const games: Game[] = [
    {
        id: '1',
        title: 'La Malédiction du Manoir',
        description: 'Échappez au manoir hanté avant que le fantôme ne vous capture.',
        duration: 60,
        difficulty: 'Moyen',
        minPlayers: 2,
        maxPlayers: 6,
        imageUrl: 'src/assets/images/manoir.jpg'
    },
    {
        id: '2',
        title: 'Asile des Oubliés',
        description: 'Survivez aux expériences horribles de cet asile abandonné.',
        duration: 75,
        difficulty: 'Difficile',
        minPlayers: 3,
        maxPlayers: 8,
        imageUrl: 'src/assets/images/asile.jpeg'
    }
];