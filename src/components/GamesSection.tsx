import { GameCard } from './GameCard';
import { games } from '../data/GameData';
import type { Game } from '../types/Game';

export const GamesSection = () => {
    return (
        <section className="my-12">
            <h2 className="text-2xl font-bold text-center mb-6">Nos sessions d'escape game</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                    {games.map((game: Game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
            </div>
        </section>
    );
};