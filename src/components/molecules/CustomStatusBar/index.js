import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '_styles';

const CustomStatusBar = () => (
    <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
);

export default CustomStatusBar;
