import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Square from '_atoms/Square';
import {Spacing, Typography} from '_styles';

console.log(Square);

const ScoreItem = ({
  score = 0,
  subject = 'nguyen hong quan',
  subject_code = 'WEB206',
  className = 'PT15111-web',
}) => {
  return (
    <View style={styles.container}>
      <Square style={styles.score} content={score} width={60} />

      <View style={styles.shortInfo}>
        <Text style={[Typography.FONT_BOLD, styles.subject]}>
          Môn {subject}
        </Text>
        <Text style={styles.subject_code}>Mã môn {subject_code}</Text>
        <Text style={styles.teacher}>Lớp {className}</Text>
      </View>
    </View>
  );
};

export default ScoreItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: Spacing.SCALE_12,
  },

  score: {
    flex: 1,
    borderRadius: 10,
  },

  shortInfo: {
    flex: 2,
    paddingHorizontal: Spacing.SCALE_12,
    fontSize: Typography.FONT_SIZE_16,
  },
  subject: {
    fontSize: Typography.FONT_SIZE_16,
    textTransform: 'capitalize',
  },
  subject_code: {},
  teacher: {},
});
