import {useEffect, useState} from 'react';
import { Difficulty, type Game } from "../types/Game";
import type { Slot } from "../types/Slot";
import { SlotManager } from './SlotManager';

interface GameFormProps {
    initialGame: Omit<Game, 'id'>;
    onSubmit: (game: Omit<Game, 'id'>, slots: Slot[]) => Promise<void>;
    isEditing: boolean;
    isLoading: boolean;
}

export const GameForm = ({ initialGame, onSubmit, isEditing, isLoading }: GameFormProps) => {
    const [game, setGame] = useState<Omit<Game, 'id'>>(initialGame);
    const [slots, setSlots] = useState<Slot[]>(initialGame.slots);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        setGame(initialGame);
        setSlots(initialGame.slots);
        setErrors({});
    }, [initialGame]);

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        // Validation minPlayers <= maxPlayers
        if (game.minPlayers > game.maxPlayers) {
            newErrors.players = "Le nombre minimum de joueurs doit être inférieur ou égal au maximum";
        }

        // Validation des créneaux
        if (slots.length === 0) {
            newErrors.slots = "Au moins un créneau doit être défini";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setGame(prev => ({
            ...prev,
            [name]: name === 'title' || name === 'description' || name === 'difficulty' || name === 'imageUrl'
                ? value
                : Number(value)
        }));

        if (name === 'minPlayers' || name === 'maxPlayers') {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.players;
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        await onSubmit(game, slots);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Titre *
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={game.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Description *
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={game.description}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label htmlFor="duration" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Durée (minutes) *
                    </label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        min="30"
                        max="120"
                        value={game.duration}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </div>

                <div>
                    <label htmlFor="difficulty" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Difficulté *
                    </label>
                    <select
                        id="difficulty"
                        name="difficulty"
                        value={game.difficulty}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                        {Difficulty.map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="price" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Prix (€) *
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="0"
                        step="0.5"
                        value={game.price}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="minPlayers" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Participants minimum *
                    </label>
                    <input
                        type="number"
                        id="minPlayers"
                        name="minPlayers"
                        min="1"
                        max="10"
                        value={game.minPlayers}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                            errors.players ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                    />
                </div>

                <div>
                    <label htmlFor="maxPlayers" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                        Participants maximum *
                    </label>
                    <input
                        type="number"
                        id="maxPlayers"
                        name="maxPlayers"
                        min="1"
                        max="20"
                        value={game.maxPlayers}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                            errors.players ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                    />
                </div>
            </div>

            {errors.players && (
                <p className="text-red-500 text-sm mt-1">{errors.players}</p>
            )}

            <div>
                <label htmlFor="imageUrl" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    URL de l'image
                </label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={game.imageUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
            </div>

            <div>
                <SlotManager slots={slots} setSlots={setSlots} />
                {errors.slots && (
                    <p className="text-red-500 text-sm mt-1">{errors.slots}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-red-600 dark:bg-red-700 text-white font-semibold rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isEditing ? 'Mettre à jour' : 'Ajouter le Jeu'}
            </button>
        </form>
    );
};