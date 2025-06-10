import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="footer-links">
                <Link to="/games">Sessions de jeu</Link>
                <Link to="/legal">Mentions légales</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-copyright">
                © {new Date().getFullYear()} La Maison Horrifique
            </div>
        </footer>
    );
};