import { GamesList } from "../components/GamesList";
import { Link, Outlet } from "react-router-dom";
import { useGames } from "../hooks/useGames";
import { useEmployeeAuth } from "../context/EmployeeAuthContext";

export const GamesPage = () => {
    const { games, status } = useGames(10);
    const { isAuthenticated } = useEmployeeAuth();

    return (
        <section className="my-12">
            {isAuthenticated && (
                <div className="text-center mb-4">
                    <Link
                        to="/games/manage-sessions"
                        className="inline-block px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white transition-colors"
                    >
                        Ajouter un créneau
                    </Link>
                </div>
            )}

            <Outlet />
            {status === "loading" && <span>Loading...</span>}
            {status === "error" && <span>Has error !</span>}
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                Découvrez nos sessions d'escape game disponibles. Réservez votre place dès maintenant pour une expérience inoubliable !
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <GamesList games={games} />
            </div>
        </section>
    );
}
