import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScene from '_scenes/LoginScene';
import ParentLoginScene from '_scenes/ParentLoginScene';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" headerMode="none">
            <AuthStack.Screen name="Login" component={LoginScene} />
            <AuthStack.Screen name="ParentLogin" component={ParentLoginScene} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
