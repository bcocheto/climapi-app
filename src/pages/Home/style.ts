import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../common/ColorsEnum";
import { SHADOWS_OFFSET_ENUM } from "../../common/ShadowsOffset";
import { SHADOWS_RADIUS_ENUM } from "../../common/ShadowRadius";
import { SHADOWS_OPACITY_ENUM } from "../../common/ShadowsOpacity";
import { SHADOWS_ELEVATION_ENUM } from "../../common/ShadowsElevation";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS_ENUM.background,
  },
  menu: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textDivider: {
    fontSize: 18,
    color: "#C0C0C0",
    letterSpacing: 0.01,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
    marginTop: 10,
    marginStart: 10,
    marginEnd: 10,
    padding: 10,
    backgroundColor: COLORS_ENUM.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height,
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic,
  },
  favoriteText: {
    fontSize: 16,
    marginLeft: 16,
    paddingBottom: 20,
    fontWeight: '700',
  },
  favoriteIcon: {
    paddingTop: 10,
  },
  textFavorite: {
    fontSize: 16,
    paddingBottom: 20
  }
});
