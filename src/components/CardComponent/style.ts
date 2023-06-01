import { StyleSheet } from 'react-native';
import { SHADOWS_OFFSET_ENUM } from '../../common/ShadowsOffset';
import { SHADOWS_RADIUS_ENUM } from '../../common/ShadowRadius';
import { SHADOWS_OPACITY_ENUM } from '../../common/ShadowsOpacity';
import { SHADOWS_ELEVATION_ENUM } from '../../common/ShadowsElevation';
import { COLORS_ENUM } from '../../common/ColorsEnum';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 6,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: SHADOWS_OFFSET_ENUM.basic_width,
      height: SHADOWS_OFFSET_ENUM.basic_height,
    },
    shadowRadius: SHADOWS_RADIUS_ENUM.basic,
    shadowOpacity: SHADOWS_OPACITY_ENUM.basic,
    elevation: SHADOWS_ELEVATION_ENUM.basic,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal:6,
    justifyContent:'center'
  },
  image: {
    borderRadius: 100 * 0.2,
    margin: 10,
    aspectRatio: 1,
    width: 60,
    height: undefined,
    borderColor: COLORS_ENUM.secondary_text,
    overflow: 'hidden',
    borderWidth: 0.6,
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '900',
  },
  description: {
    fontSize: 14,
    width: 190,
  },
  favorite: {
    paddingTop: 10,
  },
  textFavorite: {
    fontSize: 16,
    paddingBottom: 20
  }
});
