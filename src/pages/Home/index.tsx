import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './style';
import { HeaderComponent } from '../../components/Header';
import { SearchBar } from '../../components/SearchBarComponent';
import { CardComponent } from '../../components/CardComponent';
import { Details } from '../../components/Details';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen)
  };

useEffect(() => {
  console.log(isModalOpen)
}, [isModalOpen]);
  useEffect(() => {
// console.log('cities',cities)
}, [cities]);

    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const favoritesData = await AsyncStorage.getItem('favorites');

                if (favoritesData) {
                    // Se houver favoritos salvos, converter para array e atualizar o estado
                    const favoritesArray = JSON.parse(favoritesData);
                    setFavorites(favoritesArray);
                }
            } catch (error) {
                console.log('Error getting favorites:', error);
            }
        };
        console.log(favorites);
        loadFavorites();
    }, []);

    const renderFavoriteItem = ({ item }) => (
        <View>
            <Text style={styles.favoriteText}>{item.address_components[0].long_name}</Text>
        </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <SearchBar setCities={setCities} />
      <View style={styles.menu}>
        <Text style={styles.textDivider}>Previsão de hoje</Text>
      </View>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <CardComponent
            city={item ? item : ''}
            setSelectedItem={(item) => setSelectedItem(item)}
            toggleModal={() => toggleModal()}
          />
        )}
      />
        <View style={styles.menu}>
            <Text style={styles.textDivider}>Locais Favoritos</Text>
        </View>

        <FlatList
            data={favorites}
            renderItem={renderFavoriteItem}
            keyExtractor={(item) => item.id}
        />

      <Details
        isOpen={isModalOpen}
        toggleModal={() => toggleModal()}
        data={selectedItem}
      />
    </View>
  );
};
