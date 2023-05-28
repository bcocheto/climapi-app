import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

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
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};
