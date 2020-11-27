import React, {useState} from 'react';
import {Alert, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Spacing, Mixins, Colors} from '_styles/index';
import Icon from '_atoms/Icon';

const NewsItem = (props) => {
  const {item, onPress} = props;
  const [collapse, setCollapse] = useState(false);

  return (
    <View style={[styles.container, Mixins.boxShadow()]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.shortInfo}
          onPress={() => Alert.alert('Chi tiết tin tức')}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>

        <View style={[styles.arrow, Spacing.ALIGN_CENTER]}>
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
          <Text style={{color: Colors.GRAY_DARK}}>
            Người đăng: {item.created_by}
          </Text>
          <Text style={{color: Colors.GRAY_DARK}}>
            Thời gian: {item.created_at}
          </Text>
          <Text style={{color: Colors.GRAY_DARK}}>
            Cập nhật lần cuối: {item.updated_at}
          </Text>
        </View>
      )}
    </View>
  );
};

export default NewsItem;

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
  title: {
    color: Colors.PRIMARY,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  create: {
    color: '#000',
  },

  arrow: {
    flex: 1,
  },
});
