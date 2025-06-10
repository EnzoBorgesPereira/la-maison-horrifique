import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">La Maison Horrifique</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/booking">Réservation</Link></li>
                <li><Link to="/games">Sessions de jeu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};