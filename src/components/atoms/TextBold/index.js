import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FONT_WEIGHT_BOLD } from '_styles/typography';

const TextBold = ({ text, ...textProps }) => (
    <Text {...textProps} style={styles.text}>
        {text}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 15,
    },
});

export default TextBold;
