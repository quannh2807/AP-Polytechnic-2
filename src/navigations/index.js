import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from '_navigations/auth-navigator';
import AppNavigator from '_navigations/app-navigator';
import DetailNewsScene from '_scenes/DetailNewsScene';
import ChiTietDiemDanhScene from '_scenes/ChiTietDiemDanhScene';
import TableScene from '_scenes/TableScene';
import SmsScene from '_scenes/SmsScene';
import KhenThuongKyLuatScene from '_scenes/KhenThuongKyLuatScene';

const RootStack = createStackNavigator();

const RootNavigator = () => (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName="Auth" headerMode="none">
            <RootStack.Screen name="Auth" children={AuthNavigator} />
            <RootStack.Screen name="App" children={AppNavigator} />
            <RootStack.Screen name="DetailEmpty" component={DetailNewsScene} />
            <RootStack.Screen
                name="ChiTietDiemDanh"
                component={ChiTietDiemDanhScene}
            />
            <RootStack.Screen name="SMS" component={SmsScene} />

            <RootStack.Screen
                name="KhenThuongKyLuat"
                component={KhenThuongKyLuatScene}
            />
            <RootStack.Screen name="Table" component={TableScene} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootNavigator;
