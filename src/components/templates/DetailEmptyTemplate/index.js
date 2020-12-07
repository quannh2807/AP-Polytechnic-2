import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import { GRAY_MEDIUM, GRAY_LIGHT } from '_styles/colors';
import TextBold from '_atoms/TextBold';
import TextOpacity from '_atoms/TextOpacity';

const windowHeight = Dimensions.get('window').height;

const DetailEmptyTemPlate = ({ route }) => {
    const { text, user, created_at } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextBold text={text} />
                <TextOpacity text={user} />
                <TextOpacity text={created_at} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: GRAY_MEDIUM,
        padding: 10,
    },
    box: {
        backgroundColor: 'white',
        padding: 10,
        height: windowHeight,
        borderRadius: 5,
    },
});

export default DetailEmptyTemPlate;
