import React from 'react';
import { Text, StyleSheet } from 'react-native';

import {
    FONT_SIZE_12,
    LINE_HEIGHT_14,
    FONT_FAMILY_REGULAR,
} from '_styles/typography';

const Paragraph = ({ paragraph = 'Đăng Nhập' }) => (
    <Text style={styles.paragraph}> {paragraph} </Text>
);

const styles = StyleSheet.create({
    paragraph: {
        fontSize: FONT_SIZE_12,
        lineHeight: LINE_HEIGHT_14,
        fontFamily: FONT_FAMILY_REGULAR,
    },
});

export default Paragraph;
