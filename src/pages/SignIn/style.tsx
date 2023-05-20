import { StyleSheet } from 'react-native';
import {COLORS_ENUM} from "../../common/ColorsEnum";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogin: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginBottom: 10,
        color: COLORS_ENUM.primary_text,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: COLORS_ENUM.primary_light,
        borderRadius: 8,
        marginBottom: 8,
        marginTop: 4,
        padding: 10,
        fontSize: 14
    },
    button: {
        width: 300,
        height: 40,
        borderRadius: 6,
        backgroundColor: COLORS_ENUM.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: COLORS_ENUM.secondary_text,
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 26
    },
    forgotPassword: {
        width: 200,
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 8
    },
    label: {
        color: COLORS_ENUM.primary_text
    },
    error: {
        fontSize: 14,
        color: COLORS_ENUM.primary_error,
        marginTop: 4,
        marginBottom: 4
    },
});
