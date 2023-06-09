import { StatusBar, StyleSheet } from 'react-native';
import { COLORS_ENUM } from '../../common/ColorsEnum';
import { BUTTON_SIZE_ENUM } from '../../common/ButtonSize';
import { SHADOWS_OFFSET_ENUM } from '../../common/ShadowsOffset';
import { SHADOWS_RADIUS_ENUM } from '../../common/ShadowRadius';
import { SHADOWS_OPACITY_ENUM } from '../../common/ShadowsOpacity';
import { SHADOWS_ELEVATION_ENUM } from '../../common/ShadowsElevation';

const STATUS_BAR_HEIGHT = StatusBar.currentHeight
  ? StatusBar.currentHeight + 4
  : 24;

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: COLORS_ENUM.primary_dark,
    flexDirection: 'row',
    elevation: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 16,
    paddingBottom: 64,
    backgroundColor: COLORS_ENUM.primary,
  },
  title: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    color: COLORS_ENUM.primary_text,
  },
  searchButton: {
    height: BUTTON_SIZE_ENUM.aux,
    width: BUTTON_SIZE_ENUM.aux,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS_ENUM.primary_light,
    borderRadius: 100 * 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height,
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic,
  }
});
