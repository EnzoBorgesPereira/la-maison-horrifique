interface ErrorDisplayProps {
    error: string;
    onRetry: () => void;
}

export const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
    return (
        <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg">
            {error}
            <button
                onClick={onRetry}
                className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Réessayer
            </button>
        </div>
    );
};