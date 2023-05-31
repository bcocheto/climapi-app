import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { AuthProvider } from "./src/contexts/auth";

import Routes from './src/routes';
import {COLORS_ENUM} from "./src/common/ColorsEnum";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: COLORS_ENUM.primary_text,
        background: COLORS_ENUM.background
    },
};

const App: React.FC = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
