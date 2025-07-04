import {Link} from "react-router-dom";

export const HeroSection = () => {
    return (
        <section className="relative flex h-96 items-center justify-center bg-cover bg-center bg-gray-900/50 dark:bg-gray-900/70 bg-blend-overlay">
            <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg dark:text-gray-100">
                    Bienvenue à La Maison Horrifique
                </h1>
                <p className="text-xl text-gray-200 dark:text-gray-300 mb-6 drop-shadow-md">
                    Des escape games immersifs qui vous glaceront le sang
                </p>
                <Link
                    to="/booking"
                    className="mt-4 md:mt-0 md:ml-8 px-6 py-3 bg-red-600 dark:bg-red-700 text-white rounded-lg font-semibold shadow hover:bg-red-700 dark:hover:bg-red-600 transition whitespace-nowrap"
                >
                    Réserver une session
                </Link>
            </div>
        </section>
    );
};