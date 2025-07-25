import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-200 dark:text-gray-300 mt-auto">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 space-y-4 sm:flex-row sm:space-y-0">
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="hover:text-red-500 dark:hover:text-red-400 transition-colors">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
                <div className="flex space-x-4">
                    <Link
                        to="/games"
                        className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                        Sessions de jeu
                    </Link>
                    <Link
                        to="/legal"
                        className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                        Mentions légales
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
                <div className="text-sm">© {new Date().getFullYear()} La Maison Horrifique</div>
            </div>
        </footer>
    );
};