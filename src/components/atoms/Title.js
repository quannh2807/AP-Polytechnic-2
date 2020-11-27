import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Typography, Colors} from '_styles';

const Title = ({title, content, size = Typography.FONT_SIZE_16}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, Typography.FONT_BOLD, {fontSize: size}]}>
        {title}
      </Text>
      <Text style={[styles.content, {fontSize: size}]}>{content}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tile: {
    color: Colors.BLACK,
  },
  content: {
    paddingHorizontal: 5,
    color: Colors.SECONDARY,
    textTransform: 'uppercase',
  },
});
