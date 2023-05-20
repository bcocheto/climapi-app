import React, {Component, memo} from 'react';
import {Image, StyleSheet, View} from "react-native";
import * as Animatable from 'react-native-animatable';

class Logo extends Component {
    render() {
        return (
            <View>
                <Animatable.Text
                    animation="slideInRight"
                    duration={3000}
                    style={styles.animatableText}
                >
                    <Image source={require('../../../assets/logo-login.png')} style={styles.image} />
                </Animatable.Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    animatableText: {
        fontSize: 100,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 8
    },
});

export default memo(Logo);