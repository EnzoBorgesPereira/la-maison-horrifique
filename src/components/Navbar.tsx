import { Link } from 'react-router-dom'
import { useTheme } from "../shared/ThemeContext.tsx";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-gray-900 dark:bg-gray-950 text-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link
                    to="/"
                    className="text-2xl font-bold hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                    La Maison Horrifique
                </Link>

                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link
                            to="/booking"
                            className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        >
                            Réservation
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/games"
                            className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        >
                            Sessions de jeu
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center px-3 py-1 rounded bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
                        aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
                    >
                        {theme === "dark" ? (
                            <>
                                <i className="fa-solid fa-sun mr-2"></i>
                                <span className="hidden sm:inline">Mode clair</span>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-moon mr-2"></i>
                                <span className="hidden sm:inline">Mode sombre</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};