import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FONT_WEIGHT_BOLD, FONT_FAMILY_BOLD } from '_styles/typography';

const Label = ({ text }) => <Text style={styles.text}>{text}</Text>;

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        fontWeight: FONT_WEIGHT_BOLD,
        fontFamily: FONT_FAMILY_BOLD,
    },
});

export default Label;
