import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScene from '_scenes/LoginScene';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" headerMode="none">
            <AuthStack.Screen name="Login" component={LoginScene} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
