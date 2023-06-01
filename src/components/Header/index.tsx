import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { styles } from './style';
import {useAuth} from "../../contexts/auth";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const HeaderComponent = () => {
    const { signOut} = useAuth();

    async function handleSignOut() {
        signOut();
    }

    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ClimAPI</Text>
          <TouchableOpacity onPress={handleSignOut}>
              <Icon name="logout" size={25} color="#0d0d0d"/>
          </TouchableOpacity>
      </View>
    </View>
  );
};
