import { StyleSheet } from 'react-native';
import { COLORS_ENUM } from '../../common/ColorsEnum';
import { SHADOWS_OFFSET_ENUM } from '../../common/ShadowsOffset';
import { SHADOWS_RADIUS_ENUM } from '../../common/ShadowRadius';
import { SHADOWS_OPACITY_ENUM } from '../../common/ShadowsOpacity';
import { SHADOWS_ELEVATION_ENUM } from '../../common/ShadowsElevation';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS_ENUM.menu_color,
    flexDirection: 'row',
    justifyContent: 'space-around',
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

});
