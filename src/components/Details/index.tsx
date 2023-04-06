import React from 'react';
import {Modal, Text, TouchableWithoutFeedback, View} from 'react-native';
import {Location} from '../../common/types/Location';
import {styles} from './style';

interface DetailsProps {
    isOpen: boolean;
    toggleModal: () => void;
    selectedLocation: Location;
}

export const Details = ({isOpen, toggleModal, selectedLocation}: DetailsProps) => {
    return (
        <Modal visible={isOpen} transparent>
            <TouchableWithoutFeedback onPress={toggleModal}>
                <View style={styles.modal}>
                    <View style={styles.modalHeaderContent}>
                        <Text style={styles.title}>{selectedLocation.horas}</Text>
                        <Text style={styles.title}>{selectedLocation.valor}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};