import React, {Component, memo} from 'react';
import {Image, StyleSheet, View} from "react-native";
import * as Animatable from 'react-native-animatable';

class Logo extends Component {
    render() {
        return (
            <View>
                <Animatable.Text
                    animation="flash"
                    duration={4000}
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
        fontWeight: 'bold',
        marginBottom: 20
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default memo(Logo);