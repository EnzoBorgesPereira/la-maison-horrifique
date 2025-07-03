import { Link } from "react-router-dom";
import type { Game } from "../types/Game";

type Props = { games: Game[] };
export function GamesList({ games }: Props) {
    return games.map((s) => (
        <div className="card" key={s.id}>
            <div key={s.id} className="card flex ">
                <div>Titre : {s.title}</div>
                <Link to={`/game/${s.id}`}>DETAIL</Link>
            </div>
        </div>
    ));
}
