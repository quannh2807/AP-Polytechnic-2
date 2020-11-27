import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ScoreItem from '_molecules/ScoreItem';

const TopTab = createMaterialTopTabNavigator();

const ScoreScreen = () => {
  return (
    <TopTab.Navigator
      initialRouteName="BangDiem"
      tabBarOptions={{
        activeTintColor: '#41a6dc',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}>
      <TopTab.Screen
        name="BangDiem"
        component={BangDiem}
        options={{title: 'Bảng điểm'}}
      />
      <TopTab.Screen
        name="LichSuHoc"
        component={LichSuHoc}
        options={{title: 'Lịch sử học'}}
      />
    </TopTab.Navigator>
  );
};

export default ScoreScreen;

const LichSuHoc = () => (
  <View>
    <Text>Bang Diem Theo Ky</Text>
    <ScoreItem />
  </View>
);
const BangDiem = () => (
  <View>
    <Text>Bang Diem Theo Ky</Text>
  </View>
);
