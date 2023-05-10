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
    lat: any;
    long: any;
    data: any;
}

export const Details = ({ isOpen, toggleModal, lat, long, data }: DetailsProps) => {
    
const [weather, setWeather] = useState<Weather | null>(null);
const apiKey = 'cf8526ba8a47413319580d5dcecd29f9'; // Sua chave de acesso à API

useEffect(() => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherData = {
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
      };
      setWeather(weatherData);
    })
    .catch((error) => console.error(error));
}, [lat, long]);

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
                {/* <Text>{weather.description}</Text>
                <Text>{`Temperatura atual: ${weather.temp}°C`}</Text>
                <Text>{`Sensação térmica: ${weather.feels_like}°C`}</Text>
                <View style={styles.modalHeaderContent}></View> */}
              </View>

              <View style={styles.modalContent}>
                <View>
                  <Text style={styles.secondary_title}>QUANTIDADE</Text>
                  <Text numberOfLines={1} style={styles.subTitle}>
                    a{' '}
                  </Text>
                  <Text style={styles.secondary_title}>PREÇO</Text>
                  <Text numberOfLines={1} style={styles.subTitle}>
                    b
                  </Text>
                  <Text style={styles.secondary_title}>CATEGORIA</Text>
                  <Text numberOfLines={1} style={styles.subTitle}>
                    c
                  </Text>
                  <Text style={styles.secondary_title}>DESCRIÇÃO</Text>
                  <Text numberOfLines={3} style={styles.subTitle}>
                    d
                  </Text>
                </View>
              </View>
            </Animatable.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
};