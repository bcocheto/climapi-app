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
  const [titleType, setTitleType] = useState(styles.defaultTitle);
  const [descriptionType, setDescriptionType] = useState(
    styles.defaultDescription
  );
  const [alert, setAlert] = useState<string>('');

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);


  return (
    <TouchableWithoutFeedback onPress={() => {setSelectedItem(city);
 toggleModal()}}>
      <Animatable.View
        delay={500}
        animation={'flipInX'}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text numberOfLines={1} style={[styles.title, titleType]}>
            {` ${String(city.components.town)}`}
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.description, descriptionType]}
          >
            {`${city.components.state}`}
          </Text>
        </View>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};
