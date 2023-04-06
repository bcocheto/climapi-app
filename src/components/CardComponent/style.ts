import { StyleSheet } from "react-native";
import { COLORS_ENUM } from "../../common/ColorsEnum";
import { SHADOWS_OFFSET_ENUM } from "../../common/ShadowsOffset";
import { SHADOWS_RADIUS_ENUM } from "../../common/ShadowRadius";
import { SHADOWS_OPACITY_ENUM } from "../../common/ShadowsOpacity";
import { SHADOWS_ELEVATION_ENUM } from "../../common/ShadowsElevation";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  content: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: '#777',
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  defaultTemperature: {
    color: '#000',
  },
  legalTemperature: {
    color: '#008000',
  },
  quenteTemperature: {
    color: '#ffa500',
  },
  frioTemperature: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18
  }
} 
  );
