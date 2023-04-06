import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import { styles } from "./style";
import { COLORS_ENUM } from "../../common/ColorsEnum";
import * as Animatable from 'react-native-animatable';

interface CityProps {
  name: string;
  temperature: number;
  description: string;
  icon: string;
  setSelectedCity: Dispatch<SetStateAction<string>>;
  toggleModal: () => void;
}

const CityTileComponent = ({ name, temperature, description, icon, setSelectedCity, toggleModal }: CityProps) => {
  const animatedScale = useRef(new Animated.Value(0)).current;
  const [temperatureType, setTemperatureType] = useState(styles.defaultTemperature);

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  useEffect(() => {
    if (temperature <= 0) {
      setTemperatureType(styles.frioTemperature);
    } else if (temperature > 0 && temperature <= 20) {
      setTemperatureType(styles.legalTemperature);
    } else {
      setTemperatureType(styles.quenteTemperature);
    }
  }, [temperature]);

  const handleButtonPress = () => {
    setSelectedCity(name);
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 26,
      useNativeDriver: true,
    }).start();
    toggleModal();
  }

  return (
    <TouchableWithoutFeedback onPress={handleButtonPress}>
      <Animatable.View delay={500} animation={'flipInX'} style={styles.container}>

        <Image
          style={styles.image}
          source={{ uri: `${icon}` }}
        />

        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>{name}</Text>
          <Text numberOfLines={2} style={styles.description}>{description}</Text>
        </View>

        <View>
          <Text style={[styles.temperature, temperatureType]}>{temperature}°C</Text>
        </View>

        <TouchableOpacity onPress={handleButtonPress}>
          <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
            <Feather name="more-vertical" size={32} color="#808080" />
          </Animated.View>
        </TouchableOpacity>

      </Animatable.View>
    </TouchableWithoutFeedback>

  );
};

