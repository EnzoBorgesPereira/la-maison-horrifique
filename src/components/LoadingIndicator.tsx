export const LoadingIndicator = () => {
    return (
        <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Chargement des jeux...</p>
        </div>
    );
};
