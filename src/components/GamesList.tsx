import type { Game } from "../types/Game";
import { GameCard } from "./GameCard";

type Props = { games: Game[] };
export function GamesList({ games }: Props) {
    return games.map((game: Game) => (
        <GameCard key={game.id} game={game} />
    ));
}
