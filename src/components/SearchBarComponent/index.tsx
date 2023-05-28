import React, { useEffect, useState } from 'react';
import { TextInput} from 'react-native';
import { styles } from './style';
import * as Animatable from 'react-native-animatable';

interface Result {
  components: {
    city: string;
  };
  geometry: {
    lat: number;
    lng: number;
  };
}

interface SearchBarProps {
  setCities: React.Dispatch<React.SetStateAction<any[]>>;
}

export const SearchBar = ({setCities}:SearchBarProps) => {
  const [query, setQuery] = useState<string>('');
  const API_KEY = 'AIzaSyDFkMo40n9I6DlgroSWWpAWd4sgK1A5-ZI';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${API_KEY}`;

  const handleSearch = async () => {
        if (query.trim() !== '') {
          const response = await fetch(url);
          const data = await response.json();
          setCities(data.results);
        } else {
          setCities([]);
        }
  };
  
  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <Animatable.View animation="flipInY" style={styles.container}>
      <Animatable.View delay={1000} animation="fadeIn" >
        <TextInput
          placeholder="Digite o nome da cidade"
          value={query}
          onChangeText={setQuery}
        />
      </Animatable.View>
    </Animatable.View>
  );
};
