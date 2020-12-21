import React from 'react';
import { Text, StyleSheet } from 'react-native';

import {
    FONT_SIZE_14,
    LINE_HEIGHT_16,
    FONT_FAMILY_REGULAR,
} from '_styles/typography';

const TextCommon = ({ text }) => <Text style={styles.text}> {text} </Text>;

const styles = StyleSheet.create({
    text: {
        fontSize: FONT_SIZE_14,
        lineHeight: LINE_HEIGHT_16,
        fontFamily: FONT_FAMILY_REGULAR,
    },
});

export default TextCommon;
