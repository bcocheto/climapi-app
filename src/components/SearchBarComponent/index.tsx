import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';


export const SearchBar = () => {
  return (
    <Animatable.View animation="flipInY" style={styles.container}>
      <Animatable.View delay={1000} animation="fadeIn" style={styles.item}>
        <Text style={styles.itemTitle}>input</Text>
        <View>
          <TouchableOpacity style={styles.searchButton}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </Animatable.View>
  );
};
