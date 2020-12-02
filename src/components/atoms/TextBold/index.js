import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FONT_WEIGHT_BOLD } from '_styles/typography';

const TextBold = ({ textBold, ...textProps }) => <Text {...textProps} style={styles.text}>{textBold}</Text>;

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 15,
    },
});

export default TextBold;
