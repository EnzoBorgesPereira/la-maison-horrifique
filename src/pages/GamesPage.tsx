import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { GamesList } from "../components/GamesList";
import { Outlet } from "react-router-dom";

export const GamesPage = () => {

    const [games, setgames] = useState<Game[]>([]);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        setStatus("loading");

        fetch("http://fake-api/api/v1/games")
            .then((res) =>
                res
                    .json()
                    .then((games) => {
                        setStatus("success");
                        setgames([...games]);
                    })
                    .catch(() => {
                        console.log("ERROR");
                        setStatus("error");
                    })
            )
            .catch(() => {
                setStatus("error");
            });
    }, []);

    return (
        <div className="max-w-4xl mx-auto my-12 px-4">
            <Outlet />
            {status === "loading" && <span>Loading...</span>}
            {status === "error" && <span>Has error !</span>}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Nos games</h1>
            <p className="text-gray-700 mb-8">
                Découvrez nos games d'escape game disponibles. Réservez votre place dès maintenant pour une expérience inoubliable !
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <GamesList
                    games={games}
                />
            </div>
        </div>
    );
}