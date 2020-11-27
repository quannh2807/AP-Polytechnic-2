import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CutomIcon = ({
    name = 'add-circle-outline',
    color = '#000',
    size = 36,
}) => <Ionicons name={name} size={size} color={color} />;

export default CutomIcon;
