import React, {createContext, useState, PropsWithChildren, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as authService from "../services/auth";
import {Alert} from "react-native";

export interface AuthData {
    token: string;
    username: string;
    password: string;
}

interface AuthContextData {
    authData?: AuthData;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<PropsWithChildren<Props>> = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        loadStoragedData();
    }, []);

    async function loadStoragedData(): Promise<void> {
        try {
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                const _authData: AuthData = (JSON.parse(authDataSerialized));
                setAuthData(_authData);
            }
        } catch (e) {

        } finally {
            setisLoading(false);
        }
    }

    async function signIn(username: string, password: string) {
        try {
            const authData = await authService.signIn(username, password);
            setAuthData(authData);
            AsyncStorage.setItem('@AuthData', JSON.stringify(authData))
        } catch (error) {
            Alert.alert(error.message, "Please try again")
        }
    }

    async function signOut() {
        setAuthData(undefined);
        AsyncStorage.removeItem('@AuthData');
    }

    return (
        <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider.');
    }
    return context;
}