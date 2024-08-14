import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

type AuthContextType = {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        console.log(context)
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = (token: string) => {
        setIsAuthenticated(true);
        const expires = new Date();
        expires.setHours(expires.getHours() + 1);
        document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/`;

    };

    const logout = () => {
        setIsAuthenticated(false);
        document.cookie = 'token=; Max-Age=0; path=/';
        router.push('/auth/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};