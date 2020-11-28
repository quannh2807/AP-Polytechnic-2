import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextBold = ({ text }) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 15,
    },
});

export default TextBold;
