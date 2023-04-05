import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { AntDesign } from '@expo/vector-icons';

export const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ClimapiAPP</Text>
      </View>
    </View>
  );
};
