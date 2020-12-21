import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import { BG_LIGHT } from '_styles/colors';
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
        backgroundColor: BG_LIGHT,
        padding: 10,
    },
    box: {
        backgroundColor: 'white',
        padding: 10,
        height: windowHeight,
        borderRadius: 8,
    },
});

export default DetailEmptyTemPlate;
