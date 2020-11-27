import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  StatusBar,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors, Spacing} from '_styles';
import ONG_VANG from '_assets/images/ong_vang.png';
import Select from '_molecules/Select';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [coSo, setCoSo] = useState([
    {
      id: '1',
      label: 'Hà Nội',
      value: 'ha noi',
    },
    {
      id: '2',
      label: 'Đà nẵng',
      value: 'da nang',
    },
    {
      id: '3',
      label: 'Tây Nguyên',
      value: 'tay nguyen',
    },
    {
      id: '4',
      label: 'Thành phố Hồ Chí Minh',
      value: 'hcm',
    },
    {
      id: '5',
      label: 'Cần Thơ',
      value: 'can tho',
    },
  ]);

  return (
    <>
      <StatusBar
        backgroundColor={Colors.THEME_COLOR}
        barStyle="light-content"
      />

      <View style={styles.container}>
        <View style={[styles.header, Spacing.ALIGN_CENTER]}>
          <Image source={ONG_VANG} style={[styles.image]} />
          <Text style={styles.welcome}>Welcome to FPT Polytechnic</Text>
        </View>

        <View style={styles.body}>
          <Select listItem={coSo} />
          <Button
            title="Đăng nhập bằng tài khoản Google"
            color={Colors.THEME_COLOR}
            onPress={() => navigation.navigate('App')}
          />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.THEME_COLOR,
  },

  header: {
    flex: 3,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'center',
  },
  welcome: {
    fontSize: 24,
    color: '#fff',
  },

  body: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',

    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
