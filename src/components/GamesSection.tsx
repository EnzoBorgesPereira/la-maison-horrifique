import { GameCard } from './GameCard';
import { games } from '../data/GameData';
import type { Game } from '../types/Game';

export const GamesSection = () => {
    return (
        <section className="games">
            <h2>Nos sessions d'escape game</h2>
            <div className="games-grid">
                {games.map((game: Game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    );
};