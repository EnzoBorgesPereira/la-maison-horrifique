import { useState } from "react";
import { useLocation } from "react-router-dom";
import { GameBooking } from "../components/GameBooking";
import type { Game } from "../types/Game";
import { useGames } from "../hooks/useGames";

export const BookingPage = () => {
    const { games, status } = useGames(10);
    const location = useLocation();
    const stateGame = location.state as Game | null;

    const [selectedGame, setSelectedGame] = useState<Game | null>(stateGame ?? null);

    if (status === "loading") return <span>Loading...</span>;
    if (status === "error") return <span>Erreur de chargement des jeux</span>;

    return (
        <div className="w-full max-w-5xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="max-w-md mx-auto mb-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">
                    {selectedGame ? "Séance choisie" : "Choisissez une partie à réserver"}
                </h1>
                <select
                    value={selectedGame?.id ?? ""}
                    onChange={e => {
                        const game = games.find(g => g.id === e.target.value) || null;
                        setSelectedGame(game);
                    }}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>-- Sélectionnez une partie --</option>
                    {games.map(g => (
                        <option key={g.id} value={g.id}>
                            {g.title}
                        </option>
                    ))}
                </select>
            </div>
            {selectedGame && (
                <GameBooking
                    game={selectedGame}
                    onBook={() => {
                        alert("Réservation du créneau");
                    }}
                />
            )}
        </div>
    );
};
