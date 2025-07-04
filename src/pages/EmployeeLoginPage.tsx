import { useState } from "react";
import { useEmployeeAuth } from "../context/EmployeeAuthContext";

export const EmployeeLogin = () => {
    const { login, isAuthenticated } = useEmployeeAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        isAuthenticated ? (
            <div className="w-auto mx-auto mt-12 p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded shadow">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">Bienvenue, admin !</h1>
                </div>
                <p className="mb-4">Voici les actions que vous pouvez effectuer :</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Ajout d'une session</li>
                    <li>Modification d'un créneau pour une session</li>
                    <li>Ajout de créneaux pour une session</li>
                    <li>Annulation d'un créneau</li>
                </ul>
            </div>
        ) : (
            <div className="w-full max-w-lg mx-auto mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Connexion Employé
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Nom d’utilisateur
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez votre nom d'utilisateur"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Entrez votre mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        )
    );
};
