import React, { useState } from "react";
import type { Game } from "../types/Game";
import type { Slot } from "../types/Slot";

interface GameBookingProps {
    game: Game;
    onBook?: (slot: Slot) => void;
}

export const GameBooking: React.FC<GameBookingProps> = ({ game, onBook }) => {
    const [selectedSlotId, setSelectedSlotId] = useState<string>("");

    const availableSlots = game.slots.filter((slot) => !slot.isBooked);

    const handleSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSlotId(e.target.value);
    };

    const handleBook = () => {
        const slot = availableSlots.find((s) => s.id === selectedSlotId);
        if (slot) {
            onBook?.(slot);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                {game.title}
            </h1>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
                {game.description}
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-6 text-gray-700 dark:text-gray-200">
                <li>
                    <strong>Durée :</strong> {game.duration} min
                </li>
                <li>
                    <strong>Prix :</strong> {game.price} €
                </li>
                <li>
                    <strong>Joueurs :</strong> {game.minPlayers}–{game.maxPlayers}
                </li>
                <li>
                    <strong>Difficulté :</strong> {game.difficulty}
                </li>
            </ul>

            <div className="mb-6">
                <label
                    htmlFor="slot-select"
                    className="block font-semibold mb-2 text-gray-800 dark:text-gray-100"
                >
                    Choisir un créneau disponible
                </label>
                {availableSlots.length > 0 ? (
                    <select
                        id="slot-select"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedSlotId}
                        onChange={handleSlotChange}
                    >
                        <option value="" disabled>
                            -- Sélectionnez un créneau --
                        </option>
                        {availableSlots.map((slot) => (
                            <option key={slot.id} value={slot.id}>
                                {new Date(slot.startTime).toLocaleString()} –{" "}
                                {new Date(slot.endTime).toLocaleTimeString()}
                            </option>
                        ))}
                    </select>
                ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                        Aucun créneau disponible.
                    </p>
                )}
            </div>

            <button
                disabled={!selectedSlotId}
                onClick={handleBook}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md disabled:opacity-50 transition"
            >
                Réserver
            </button>
        </div>
    );
};