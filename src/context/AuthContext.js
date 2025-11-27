import { createContext, useEffect, useState } from "react";
import { loginService, logoutService } from "../services/authService";
import { getGenericPassword } from "react-native-keychain";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const login = async ({ username, password }) => {
        const credentials = await loginService({ username, password });
        setUser({ username });
        return credentials;
    }

    const logout = async () => {
        await logoutService();
        setUser(null);
    }

    useEffect(() => {
        const loadUserFromStorage = async () => {
            const creds = await getGenericPassword();
            if (creds) setUser({});
            setIsLoading(false);
        };
        loadUserFromStorage();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
