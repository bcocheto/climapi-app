import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../common/ColorsEnum";
import { SHADOWS_OFFSET_ENUM } from "../../common/ShadowsOffset";
import { SHADOWS_RADIUS_ENUM } from "../../common/ShadowRadius";
import { SHADOWS_OPACITY_ENUM } from "../../common/ShadowsOpacity";
import { SHADOWS_ELEVATION_ENUM } from "../../common/ShadowsElevation";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    modalContentWrapper: {
        flex: 1,
        top: '45%',
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: SHADOWS_OFFSET_ENUM.medium_width,
            height: SHADOWS_OFFSET_ENUM.medium_height
        },
        shadowOpacity: SHADOWS_OPACITY_ENUM.medium,
        shadowRadius: SHADOWS_RADIUS_ENUM.medium,
        elevation: SHADOWS_ELEVATION_ENUM.medium
    },
    modalHeader: {
        flexDirection: 'column',
        backgroundColor: COLORS_ENUM.primary,
        padding: 16,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    modalHeaderContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 1,
        padding: 16,
    },
    modalConfig: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 18,
        lineHeight: 20,
        letterSpacing: -.5,
        fontWeight: 'bold',
        color: COLORS_ENUM.primary_light,
    },
    secondary_title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: -.5,
        color: COLORS_ENUM.primary_text,
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        letterSpacing: -.2,
        color: COLORS_ENUM.secondary_text,
        marginBottom: 5
    },
});

