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
            <div className="max-w-md mx-auto mt-12 p-4 bg-white rounded shadow">
                <h1 className="text-xl font-bold mb-4">Bienvenue, admin !</h1>
                <p className="mb-4">Voici les actions que vous pouvez effectuer :</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Ajout d'une session</li>
                    <li>Modification d'un créneau pour une session</li>
                    <li>Ajout de créneaux pour une session</li>
                    <li>Annulation d'un créneau</li>
                </ul>
            </div>
        ) : (
            <div className="max-w-md mx-auto mt-12 p-4 bg-white rounded shadow">
                <h1 className="text-xl font-bold mb-4">Connexion Employé</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        className="border p-2 rounded"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        className="border p-2 rounded"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-600 text-white p-2 rounded" type="submit">Se connecter</button>
                </form>
            </div>
        )
    );
};
