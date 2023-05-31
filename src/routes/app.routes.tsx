import React from "react";
import {HomePage} from "../pages/Home";

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Home | ClimAPI" component={HomePage}/>
    </AuthStack.Navigator>
);

export default AppRoutes;