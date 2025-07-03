import { Link } from 'react-router-dom'
import { useTheme } from "../shared/ThemeContext.tsx";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

    return (
        <nav className="bg-gray-900 text-white shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link to="/" className="text-2xl font-bold hover:text-red-500">
                    La Maison Horrifique
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/booking" className="hover:text-red-500">Réservation</Link>
                    </li>
                    <li>
                        <Link to="/games" className="hover:text-red-500">Sessions de jeu</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                    </li>
                </ul>
                <button
                    onClick={toggleTheme}
                    className={
                        theme === "dark"
                            ? "flex items-center px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                            : "flex items-center px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700 transition"
                    }
                    aria-label="Changer le thème"
                >
                    {theme === "dark" ? (
                        <>
                            <i className="fa-solid fa-sun mr-2"></i>
                            Mode clair
                        </>
                    ) : (
                        <>
                            <i className="fa-solid fa-moon mr-2"></i>
                            Mode sombre
                        </>
                    )}
                </button>
            </div>
        </nav>
    );
};
