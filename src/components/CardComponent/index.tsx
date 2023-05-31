import React, {
  Dispatch,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ItemProps {
  city: any;
  setSelectedItem: Dispatch<any>;
  toggleModal: () => void;
}

export const CardComponent = ({
  city,
  setSelectedItem,
  toggleModal,
}: ItemProps) => {
  const animatedScale = useRef(new Animated.Value(0)).current;
  const [alert, setAlert] = useState<string>('');

  const saveCityToFavorites = async (city: any) => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = [];

      if (favorites) {
        favoritesArray = JSON.parse(favorites);
      }
      favoritesArray.push(city);
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
      console.log('City saved to favorites!');
    } catch (error) {
      console.log('Error saving city to favorites:', error);
    }
  };
  const addToFavorites = () => {
    saveCityToFavorites(city);
  };

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedItem(city);
        toggleModal();
      }}
    >
      <Animatable.View
        delay={500}
        animation={'flipInX'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text numberOfLines={1} style={styles.title}>
            {` ${String(city.formatted_address)}`}
          </Text>

          <TouchableOpacity onPress={addToFavorites} style={styles.favorite}>
            <Text style={styles.textFavorite}> <Icon name="favorite" size={20} color="red"/>Favoritar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};
