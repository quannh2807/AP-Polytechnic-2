import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

const Icon = ({
  name = 'chevron-forward-circle-outline',
  size = 18,
  color = '#000',
  onPress = null,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default Icon;
