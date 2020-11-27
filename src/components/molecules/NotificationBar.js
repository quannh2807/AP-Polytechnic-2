import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  StatusBar,
  NativeModules,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from '_atoms/Icon';
import {Colors, Spacing, Mixins} from '_styles';
import avatar from '_assets/images/image.png';
import {Typography} from '_styles';

const {StatusBarManager} = NativeModules;
const BAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const NotificationBar = ({userName = 'quannhph09166'}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

      <View
        style={[
          styles.container,
          Spacing.ALIGN_CENTER,
          Mixins.padding(10, 15),
          Mixins.boxShadow(),
        ]}>
        <View style={[styles.user]}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={styles.userAvatar}>
              <Image style={styles.image} source={avatar} />
            </View>
          </TouchableOpacity>

          <Text style={styles.userName}>Xin Chào, {userName}</Text>
        </View>

        <View style={[styles.iconBar]}>
          <Icon
            name="search-outline"
            size={28}
            color={Colors.THEME_COLOR}
            onPress={() => Alert.alert('Search')}
          />
          <Icon
            name="notifications-outline"
            size={28}
            color={Colors.THEME_COLOR}
            onPress={() => Alert.alert('Notification')}
          />
        </View>
      </View>
    </>
  );
};

export default NotificationBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: BAR_HEIGHT,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  user: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  userAvatar: {},
  image: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.THEME_COLOR,
  },
  userName: {
    color: '#000',
    fontSize: Typography.FONT_SIZE_14,
    marginHorizontal: 5,
  },

  iconBar: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
