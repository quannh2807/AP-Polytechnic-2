import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from '_navigations/auth-navigator';
import AppNavigator from '_navigations/app-navigator';

const RootStack = createStackNavigator();

const RootNavigator = () => (
    <NavigationContainer>
        <RootStack.Navigator initialRouteName="Auth" headerMode="none">
            <RootStack.Screen name="Auth" children={AuthNavigator} />
            <RootStack.Screen name="App" children={AppNavigator} />
        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootNavigator;
