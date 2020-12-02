import React from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    FONT_SIZE_12,
    LINE_HEIGHT_16,
    FONT_WEIGHT_REGULAR,
} from '_styles/typography';

import { GRAY_DARK } from '_styles/colors';

const TextOpacity = ({ text }) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
    text: {
        color: GRAY_DARK,
        fontSize: FONT_SIZE_12,
        lineHeight: LINE_HEIGHT_16,
        fontFamily: FONT_WEIGHT_REGULAR,
    },
});

export default TextOpacity;
