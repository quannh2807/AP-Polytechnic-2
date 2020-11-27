import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '_scenes/login';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" headerMode="none">
            <AuthStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTitle: 'Login',
                }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
