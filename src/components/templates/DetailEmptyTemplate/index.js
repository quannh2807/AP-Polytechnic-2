import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import { GRAY_MEDIUM, GRAY_LIGHT } from '_styles/colors';

const windowHeight = Dimensions.get('window').height;

const DetailEmptyTemPlate = ({ route }) => {
    const { text } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text> {text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GRAY_MEDIUM,
        padding: 10,
    },
    box: {
        backgroundColor: 'white',
        padding: 10,
        height: windowHeight,
        borderRadius: 5
    }
})
export default DetailEmptyTemPlate;