import type { Game } from "../types/Game";
import { AdminGameCard } from './AdminGameCard';

interface AdminGamesListProps {
    games: Game[];
    onEdit: (game: Game) => void;
    onDelete: (id: string) => void;
    isLoading: boolean;
    editingId: string | null;
}

export const AdminGamesList = ({ games, onEdit, onDelete, isLoading, editingId }: AdminGamesListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {games.length === 0 ? (
                <p className="text-gray-700 dark:text-gray-300 col-span-full text-center py-8">
                    Aucune session disponible
                </p>
            ) : (
                games.map(game => (
                    <AdminGameCard
                        key={game.id}
                        game={game}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        isLoading={isLoading}
                        isEditing={editingId === game.id}
                    />
                ))
            )}
        </div>
    );
};