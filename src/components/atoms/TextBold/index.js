import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FONT_FAMILY_REGULAR } from '_styles/typography';

const TextBold = ({ text, ...textProps }) => (
    <Text {...textProps} style={styles.text}>
        {text}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 16,
        textTransform: 'uppercase',
    },
});

export default TextBold;
