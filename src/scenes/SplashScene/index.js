import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, StatusBar } from 'react-native';

import splash from '_assets/images/splash.png';

const { width, height } = Dimensions.get('window');

class SplashScene extends Component {
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve('result');
            }, 2000),
        );
    };
    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

                <View style={styles.main}>
                    <Image source={splash} style={styles.img} />
                </View>
            </View>
        );
    }
}

export default SplashScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    img: {
        width,
        height,
    },
});
