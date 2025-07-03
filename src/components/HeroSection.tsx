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
                <button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                    Réserver maintenant
                </button>
            </div>
        </section>
    );
};