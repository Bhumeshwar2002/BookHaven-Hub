import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem("Users"));
            if (userData) {
                setAuthUser(userData);
            }
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
            toast.error("Error: Unable to load user data. Please log in again.");
            localStorage.removeItem("Users");
            setAuthUser(undefined);
        }
    }, []);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
