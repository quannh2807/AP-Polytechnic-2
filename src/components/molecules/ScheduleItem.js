import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import moment from 'moment';

import {Colors, Spacing, Mixins} from '_styles';
import Title from '_atoms/Title';
import Icon from '_atoms/Icon';
import {Typography} from '_styles';

const ScheduleItem = ({data}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <View style={[styles.container, Mixins.boxShadow()]}>
      <View style={styles.header}>
        <View style={styles.shortInfo}>
          <Title title="Ngày:" content={moment(data.date).format('L')} />
          <Title title="Môn học:" content={data.subject_name} />
          <Title title="Phòng:" content={data.room} />
          <Title title="Giảng đường:" content={data.location} />
        </View>
        <View style={[styles.button, Spacing.ALIGN_CENTER]}>
          <Icon
            onPress={() => setCollapse(!collapse)}
            size={32}
            color={Colors.PRIMARY}
            name={
              collapse === true
                ? 'chevron-down-circle-outline'
                : 'chevron-forward-circle-outline'
            }
          />
        </View>
      </View>

      {collapse && (
        <View style={styles.body}>
          <Title title="Mã môn:" content={data.subject_code} />
          <Title title="Tên môn:" content={data.subject_name} />
          <Title title="Lớp:" content={data.class} />
          <Title title="Giảng viên:" content={data.teacher} />
          <Title title="Ca:" content={data.shift} />
          <Title title="Thời gian:" content={data.time} />

          <TouchableOpacity
            onPress={() =>
              Alert.alert('Chi tiết môn học', data.detail, [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ])
            }>
            <Text style={[styles.detail, Typography.FONT_BOLD]}>
              Thông tin chi tiết
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: Spacing.SCALE_12,
  },

  header: {
    flexDirection: 'row',
  },
  shortInfo: {
    flex: 7,
  },
  button: {
    flex: 1,
  },

  detail: {
    color: Colors.PRIMARY,
    fontSize: Typography.FONT_SIZE_16,
  },
});
