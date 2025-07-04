import type { Game } from "../types/Game";

export const games: Game[] = [
    {
        id: '1',
        title: 'La Malédiction du Manoir',
        description: 'Échappez au manoir hanté avant que le fantôme ne vous capture.',
        duration: 60,
        difficulty: 'Moyen',
        price: 20,
        minPlayers: 2,
        maxPlayers: 6,
        imageUrl: 'src/assets/images/manoir.jpg',
        slots: [
            {
                id: 'slot1',
                gameId: '1',
                startTime: new Date('2023-11-01T10:00:00Z'),
                endTime: new Date('2023-11-01T11:00:00Z'),
                isBooked: false
            },
            {
                id: 'slot2',
                gameId: '1',
                startTime: new Date('2023-11-01T12:00:00Z'),
                endTime: new Date('2023-11-01T13:00:00Z'),
                isBooked: true
            }
        ]
    },
    {
        id: '2',
        title: 'Asile des Oubliés',
        description: 'Survivez aux expériences horribles de cet asile abandonné.',
        duration: 75,
        difficulty: 'Difficile',
        price: 25,
        minPlayers: 3,
        maxPlayers: 8,
        imageUrl: 'src/assets/images/asile.jpeg',
        slots: [
            {
                id: 'slot3',
                gameId: '2',
                startTime: new Date('2023-11-01T14:00:00Z'),
                endTime: new Date('2023-11-01T15:15:00Z'),
                isBooked: false
            },
            {
                id: 'slot4',
                gameId: '2',
                startTime: new Date('2023-11-01T16:00:00Z'),
                endTime: new Date('2023-11-01T17:15:00Z'),
                isBooked: true
            }
        ]
    }
];