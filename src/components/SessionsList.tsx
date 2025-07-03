import { Link } from "react-router-dom";
import type { Session } from "../types/Session";

type Props = { sessions: Session[] };
export function SessionsList({ sessions }: Props) {
    return sessions.map((s) => (
        <div className="card" key={s.id}>
            <div key={s.id} className="card flex ">
                <div>Thème : {s.theme}</div>
                <Link to={`/session/${s.id}`}>DETAIL</Link>
            </div>
        </div>
    ));
}
