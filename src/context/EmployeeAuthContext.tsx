import { createContext, useContext, useState, useEffect } from "react";

interface EmployeeAuthContextProps {
    isAuthenticated: boolean;
    login: (username: string, password: string, onSuccess?: () => void) => void;
    logout: () => void;
}

const EmployeeAuthContext = createContext<EmployeeAuthContextProps | undefined>(undefined);

export const EmployeeAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => localStorage.getItem("employee-auth") === "true"
    );

    useEffect(() => {
        localStorage.setItem("employee-auth", isAuthenticated ? "true" : "false");
    }, [isAuthenticated]);

    const login = (username: string, password: string, onSuccess?: () => void) => {
        if (username === "admin" && password === "password") {
            setIsAuthenticated(true);
            if (onSuccess) onSuccess();
        } else {
            alert("Identifiants invalides");
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("employee-auth");
    };

    return (
        <EmployeeAuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </EmployeeAuthContext.Provider>
    );
};

export const useEmployeeAuth = () => {
    const ctx = useContext(EmployeeAuthContext);
    if (!ctx) throw new Error("useEmployeeAuth must be used within EmployeeAuthProvider");
    return ctx;
};