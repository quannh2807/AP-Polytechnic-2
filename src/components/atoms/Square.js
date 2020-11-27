import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Spacing, Colors, Typography, Mixins} from '_styles';

const Square = ({
  backgroundColor = Colors.THEME_COLOR,
  width = 70,
  height = width,
  content = 'content',
}) => (
  <TouchableOpacity
    style={[
      {
        backgroundColor: backgroundColor,
        width: width,
        height: height,
      },
      styles.container,
      Spacing.ALIGN_CENTER,
      Mixins.padding(15),
    ]}>
    <Text style={[styles.bodySquare, Typography.FONT_BOLD]}>{content}</Text>
  </TouchableOpacity>
);

export default Square;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },

  bodySquare: {
    color: '#fff',
    fontSize: Typography.FONT_SIZE_16,
  },
});
