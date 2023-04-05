import { StyleSheet } from 'react-native';
import { COLORS_ENUM } from '../../common/ColorsEnum';
import { SHADOWS_OFFSET_ENUM } from '../../common/ShadowsOffset';
import { SHADOWS_RADIUS_ENUM } from '../../common/ShadowRadius';
import { SHADOWS_OPACITY_ENUM } from '../../common/ShadowsOpacity';
import { SHADOWS_ELEVATION_ENUM } from '../../common/ShadowsElevation';
import { BUTTON_SIZE_ENUM } from '../../common/ButtonSize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS_ENUM.menu_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: -40,
    marginStart: 34,
    marginEnd: 34,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height,
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS_ENUM.primary_text,
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS_ENUM.success,
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
  },
});
