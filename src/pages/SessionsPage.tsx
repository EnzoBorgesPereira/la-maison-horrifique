import { useEffect, useState } from "react";
import type { Session } from "../types/Session";
import { SessionsList } from "../components/SessionsList";
import { Outlet } from "react-router-dom";

export const SessionsPage = () => {

    const [sessions, setSessions] = useState<Session[]>([]);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        setStatus("loading");

        fetch("http://fake-api/api/v1/sessions")
            .then((res) =>
                res
                    .json()
                    .then((sessions) => {
                        setStatus("success");
                        setSessions([...sessions]);
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Nos Sessions</h1>
            <p className="text-gray-700 mb-8">
                Découvrez nos sessions d'escape game disponibles. Réservez votre place dès maintenant pour une expérience inoubliable !
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <SessionsList
                    sessions={sessions}
                />
            </div>
        </div>
    );
}