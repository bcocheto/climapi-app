import React, {useState, useEffect, useContext} from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from './style';
import { COLORS_ENUM } from '../../common/ColorsEnum';
import { HeaderComponent } from '../../components/Header';
import { SearchBar } from '../../components/SearchBarComponent';
import { CardComponent } from '../../components/CardComponent';
import { City } from '../../common/types/City';
import { Details } from '../../components/Details';
import { useAuth } from '../../contexts/auth';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const { signOut, user } = useAuth();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen)
  };

  async function handleSignOut() {
      signOut();
  }

useEffect(() => {
  console.log(isModalOpen)
}, [isModalOpen]);
  useEffect(() => {
// console.log('cities',cities)
}, [cities]);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}  onPress={handleSignOut}>
            <Text style={styles.buttonText}>SignOut</Text>
        </TouchableOpacity>

      <HeaderComponent />
      <SearchBar setCities={setCities} />
      <View style={styles.menu}>
        <Text style={styles.textDivider}>CLIMAPIAPP</Text>
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
      <Details
        isOpen={isModalOpen}
        toggleModal={() => toggleModal()}
        data={selectedItem}
      />
    </View>
  );
};
