import React from 'react';

import { useAuth } from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {
    const { authData} = useAuth();

    return authData ? <AppRoutes /> : <AuthRoutes />;

};


export default Routes;