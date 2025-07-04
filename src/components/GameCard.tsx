import type { Game } from "../types/Game";

interface GameCardProps {
    game: Game
}

export const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-gray-700 transition-shadow duration-300 max-w-sm mx-auto my-4">
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
                        <i className="fas fa-dollar-sign text-red-600 dark:text-red-400 mr-2"></i>
                        Prix: {game.price} €
                    </span>
                </div>
            </div>
        </div>
    );
};