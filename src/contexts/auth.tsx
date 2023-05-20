import React, {createContext, useState, PropsWithChildren, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import * as auth from "../services/auth";

interface User {
    username: string;
    password: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    signOut(): void;
}

interface Props {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<PropsWithChildren<Props>> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
            }
        }
        loadStoragedData();
    });

    async function signIn() {
        const response = await auth.signIn();
        setUser(response.user);

        api.defaults.headers.Authorization = `Baerer ${response.token}`;

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user,  signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }
    return context;
}

export {AuthProvider, useAuth};