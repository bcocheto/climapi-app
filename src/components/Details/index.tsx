import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o pacote de ícones
import { FontAwesome } from '@expo/vector-icons';
import {
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

interface Weather {
  description: string;
  temp: number;
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
}

interface DetailsProps {
  isOpen: boolean;
  toggleModal: () => void;
  data: any;
}

export const Details = ({ isOpen, toggleModal, data }: DetailsProps) => {
  const [weather, setWeather] = useState<Weather>({
    description: '',
    temp: 0,
    feels_like: 0,
    grnd_level: 0,
    humidity: 0,
    pressure: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const apiKey = 'cf8526ba8a47413319580d5dcecd29f9'; // Sua chave de acesso à API
  const [weatherIcon, setWeatherIcon] = useState<string>(''); // Estado para o ícone do clima

  useEffect(() => {
    if (data?.geometry?.location) {
      const { lat, lng } = data.geometry.location;
      setLatitude(lat);
      setLongitude(lng);
    }
  }, [data]);

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=pt_br`;

      setIsLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const weatherData: Weather = {
            description: data.weather[0].description,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            grnd_level: data.main.grnd_level,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
          };
          setWeather(weatherData);
          // Mapeamento do código de ícone para o ícone correspondente
          switch (data.weather[0].icon) {
            case '01d':
              setWeatherIcon('sun-o');
              break;
            case '01n':
              setWeatherIcon('moon-o');
              break;
            case '02d':
            case '02n':
              setWeatherIcon('cloud');
              break;
            // Adicione mais casos conforme necessário para os outros códigos de ícone
            default:
              setWeatherIcon('question-circle');
              break;
          }
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [isOpen, latitude, longitude, apiKey]);

  if (isLoading) {
    return (
      <Modal visible={isOpen} transparent>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </Modal>
    );
  }

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
              <View style={styles.modalHeaderContent}>
                <View style={styles.row}>
                <Text style={styles.title}>{weather.description}</Text>
                <Icon name={weatherIcon} size={30} color="black" />
                </View>
                <Text style={styles.temp}>{`${weather.temp}°C`}</Text>
                <Text
                  style={styles.subTitle}
                >{`Sensação térmica: ${weather.feels_like}°C`}</Text>
                <Text
                  style={styles.subTitle}
                >{`Humidade: ${weather.humidity}%`}</Text>
                <Text
                  style={styles.subTitle}
                >{`Altitude: ${weather.grnd_level}m`}</Text>
              </View>
              <View style={styles.modalContent}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: latitude,
                      longitude: longitude,
                    }}
                  />
                </MapView>
              </View>
            </View>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
