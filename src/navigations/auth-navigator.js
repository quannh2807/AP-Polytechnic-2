import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CustomIcon from '_atoms/CustomIcon';

import LoginScene from '_scenes/LoginScene';
import LoginParentsScene from '_scenes/LoginParentsScene';
import { Colors } from '_styles';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" headerMode="float">
            <AuthStack.Screen
                name="Login"
                component={LoginScene}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name="ParentLogin"
                component={LoginParentsScene}
                options={{
                    headerStyle: { elevation: 0 },
                    title: '',
                }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
