import { useState, useEffect } from 'react';
import { Difficulty, type Game } from "../types/Game";
import type { Slot } from "../types/Slot";
import { AdminGamesList } from '../components/AdminGamesList.tsx';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { ErrorDisplay } from '../components/ErrorDisplay';
import { GameForm } from "../components/GameForm.tsx";

const initialGameState: Omit<Game, 'id'> = {
    title: "",
    description: "",
    duration: 60,
    difficulty: Difficulty[0],
    price: 0,
    minPlayers: 2,
    maxPlayers: 6,
    imageUrl: "",
    slots: []
};

export const ManageSessionsPage = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentGame, setCurrentGame] = useState<Omit<Game, 'id'>>(initialGameState);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/v1/games')
            .then((res) => res.json())
            .then((data) => setGames(data))
            .catch((err) => {
                console.error(err);
                setError("Erreur lors du chargement des sessions de jeu");
            })
            .finally(() => setLoading(false));
    }, []);

    const handleSubmit = async (game: Omit<Game, 'id'>, slots: Slot[]) => {
        setLoading(true);
        try {
            const gameWithSlots = { ...game, slots };

            if (editingId) {
                await new Promise(resolve => setTimeout(resolve, 500));
                setGames(games.map(g =>
                    g.id === editingId ? {
                        ...gameWithSlots,
                        id: editingId,
                        slots: slots.map(slot => ({
                            ...slot,
                            gameId: editingId
                        }))
                    } : g
                ));
            } else {
                await new Promise(resolve => setTimeout(resolve, 500));
                const newId = Date.now().toString();
                setGames([...games, {
                    ...gameWithSlots,
                    id: newId,
                    slots: slots.map(slot => ({
                        ...slot,
                        gameId: newId
                    }))
                }]);
            }

            setCurrentGame(initialGameState);
            setEditingId(null);
        } catch (err) {
            setError("Erreur lors de la sauvegarde");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (game: Game) => {
        setCurrentGame({
            title: game.title,
            description: game.description,
            duration: game.duration,
            difficulty: game.difficulty,
            price: game.price,
            minPlayers: game.minPlayers,
            maxPlayers: game.maxPlayers,
            imageUrl: game.imageUrl,
            slots: game.slots
        });
        setEditingId(game.id);
    };

    const handleDelete = async (id: string) => {
        setLoading(true);
        try {
            // Simulate API delete
            await new Promise(resolve => setTimeout(resolve, 500));
            setGames(games.filter(game => game.id !== id));
        } catch (err) {
            setError("Erreur lors de la suppression");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading && games.length === 0) {
        return (
            <div className="max-w-4xl mx-auto my-12 px-4">
                <LoadingIndicator />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-4xl mx-auto my-12 px-4">
                <ErrorDisplay
                    error={error}
                    onRetry={() => window.location.reload()}
                />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto my-12 px-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
                Gestion des sessions d'Escape Game
            </h1>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700 mb-8">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                    {editingId ? 'Modifier une session' : 'Ajouter une nouvelle session'}
                </h2>

                <GameForm
                    initialGame={currentGame}
                    onSubmit={handleSubmit}
                    isEditing={!!editingId}
                    isLoading={loading}
                />
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-700">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Sessions existantes</h2>
                <AdminGamesList
                    games={games}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    isLoading={loading}
                />
            </div>
        </div>
    );
};