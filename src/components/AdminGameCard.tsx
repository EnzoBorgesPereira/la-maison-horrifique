import type { Game } from "../types/Game";
import { formatTime } from '../utils/timeUtils';

interface AdminGameCardProps {
    game: Game;
    onEdit: (game: Game) => void;
    onDelete: (id: string) => void;
    isLoading: boolean;
    isEditing: boolean;
}

export const AdminGameCard = ({ game, onEdit, onDelete, isLoading, isEditing }: AdminGameCardProps) => {
    return (
        <div className={`${isEditing ? 'ring-4 ring-blue-500 dark:ring-blue-400' : ''} bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-gray-700 transition-shadow duration-300  mx-auto my-4 relative`}>
            <div className="absolute top-2 right-2 flex gap-2">
                <button
                    onClick={() => onEdit(game)}
                    disabled={isLoading}
                    className={`p-2 w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title="Modifier"
                >
                    <i className="fas fa-edit text-sm"></i>
                </button>
                <button
                    onClick={() => onDelete(game.id)}
                    disabled={isLoading}
                    className={`p-2 w-10 h-10 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title="Supprimer"
                >
                    <i className="fas fa-trash text-sm"></i>
                </button>
            </div>

            <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {game.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {game.description}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="flex items-center">
                        <i className="fas fa-clock text-red-600 dark:text-red-400 mr-2"></i>
                        Durée: {game.duration} min
                    </span>
                    <span className="flex items-center">
                        <i className="fas fa-tachometer-alt text-red-600 dark:text-red-400 mr-2"></i>
                        Difficulté: {game.difficulty}
                    </span>
                    <span className="flex items-center">
                        <i className="fas fa-users text-red-600 dark:text-red-400 mr-2"></i>
                        Joueurs: {game.minPlayers}-{game.maxPlayers}
                    </span>
                    <span className="flex items-center">
                        <i className="fas fa-euro-sign text-red-600 dark:text-red-400 mr-2"></i>
                        Prix: {game.price} €
                    </span>
                </div>
                {game.slots.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Créneaux disponibles:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                            {game.slots.map(slot => (
                                <span
                                    key={slot.id}
                                    className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                                >
                                    {formatTime(slot.startTime)}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};