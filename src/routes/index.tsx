import React from 'react';

import { useAuth } from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import {ActivityIndicator, View, StyleSheet} from "react-native";

const Routes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }
    return signed ? <AppRoutes /> : <AuthRoutes />;
};
const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Routes;