import { Link } from 'react-router-dom'
export const Navbar = () => {
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
            </div>
        </nav>
    );
};