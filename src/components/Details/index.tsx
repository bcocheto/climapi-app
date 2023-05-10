import React, { useEffect, useState } from 'react';
import {Modal, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Location} from '../../common/types/Location';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

interface Weather {
  description: string;
  temp: number;
  feels_like: number;
}

interface DetailsProps {
    isOpen: boolean;
    toggleModal: () => void;
    lat: string;
    long: string;
    data: any;
}

export const Details = ({ isOpen, toggleModal, lat, long, data }: DetailsProps) => {
    
const [weather, setWeather] = useState<any>([]);
const apiKey = 'cf8526ba8a47413319580d5dcecd29f9'; // Sua chave de acesso à API

useEffect(() => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherData = {
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
      };
      setWeather(weatherData);
    })
    .catch((error) => console.error(error));
}, [isOpen]);

    return (
      <Modal visible={isOpen} transparent>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modal}>
            <Animatable.View
              duration={500}
              animation={'bounceInUp'}
              style={styles.modalContentWrapper}
            >
              <View style={styles.modalHeader}>
                <View style={styles.modalConfig}></View>
                <Text>{weather.description}</Text>
                <Text>{`Temperatura atual: ${weather.temp}°C`}</Text>
                <Text>{`Sensação térmica: ${weather.feels_like}°C`}</Text>
                <View style={styles.modalHeaderContent}></View>
              </View>
            </Animatable.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
};