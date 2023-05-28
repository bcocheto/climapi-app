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
    top: '30%',
    backgroundColor: COLORS_ENUM.primary,
    margin: 16,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.medium_width,
      height: SHADOWS_OFFSET_ENUM.medium_height,
    },
    shadowOpacity: SHADOWS_OPACITY_ENUM.medium,
    shadowRadius: SHADOWS_RADIUS_ENUM.medium,
    elevation: SHADOWS_ELEVATION_ENUM.medium,
  },
  modalHeader: {
    flexDirection: 'column',
    backgroundColor: COLORS_ENUM.background,
    padding: 32,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  modalHeaderContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalContent: {
    flex: 1,
    backgroundColor: COLORS_ENUM.primary
  },
  modalConfig: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 22,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: COLORS_ENUM.primary,
  },
  secondary_title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.5,
    color: COLORS_ENUM.primary_light,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.2,
    color: COLORS_ENUM.primary_dark,
    marginBottom: 5,
  },
  temp: {
    fontSize: 25,
    fontWeight: '400',
    color: COLORS_ENUM.primary_dark,
    marginBottom: 5,
  },
  map: {
    width: '100%',
    height: 300,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.medium_width,
      height: SHADOWS_OFFSET_ENUM.medium_height,
    },
    shadowOpacity: SHADOWS_OPACITY_ENUM.medium,
    shadowRadius: SHADOWS_RADIUS_ENUM.medium,
    elevation: SHADOWS_ELEVATION_ENUM.medium,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Define um fundo semi-transparente
  },
});

