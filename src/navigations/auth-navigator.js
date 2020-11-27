import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScene from '_scenes/LoginScene';
import LoginParentsScene from '_scenes/LoginParentsScene';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" headerMode="none">
            {/* <AuthStack.Screen name="Login" component={LoginScene} /> */}
            <AuthStack.Screen name="Login" component={LoginParentsScene} /> 
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
