import React from 'react';
import { Text } from 'react-native';

const TextColor = ({ color, content }) => (
    <Text style={{ color }}>&nbsp;{content}&nbsp;</Text>
);

export default TextColor;
