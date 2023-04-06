import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';

interface Result {
  components: {
    city: string;
  };
  geometry: {
    lat: number;
    lng: number;
  };
}

export const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Result[]>([]);

  const handleSearch = async (text: string) => {
    setQuery(text);
    const apiKey = '268bd7c8a4904a5097ca315b7abcffa0';
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${text}&key=${apiKey}&limit=10`;
    const response = await fetch(url);
    const data = await response.json();
    setResults(data.results);
  };

useEffect(() => {
  console.log(results)
}, [results]);

  return (
    <Animatable.View animation="flipInY" style={styles.container}>
      <Animatable.View delay={1000} animation="fadeIn" >
        <TextInput
          placeholder="Digite o nome da cidade"
          value={query}
          onChangeText={handleSearch}
        />
      </Animatable.View>
    </Animatable.View>
  );
};
