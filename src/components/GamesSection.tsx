import { GameCard } from './GameCard';
import type { Game } from '../types/Game';
import { useGames } from '../hooks/useGames';

export const GamesSection = () => {
    const { games, status } = useGames(3);

    if (status === "loading") return <span>Loading...</span>;
    if (status === "error") return <span>Error loading games</span>;

    return (
        <section className="my-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                Nos sessions d'escape game
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {games.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    );
};