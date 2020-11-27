import React from 'react';
import { StatusBar, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '_styles';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />

            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    drawerIcon: ({ focused, color, size }) => {
                        let iconName;

                        switch (route.name) {
                            case 'Home':
                                iconName = focused
                                    ? 'home-outline'
                                    : 'home-outline';
                                break;
                            case 'TestSchedule':
                                iconName = focused
                                    ? 'clipboard-outline'
                                    : 'clipboard-outline';
                                break;
                            case 'Transcript':
                                iconName = focused
                                    ? 'bar-chart-outline'
                                    : 'bar-chart-outline';
                                break;
                            case 'SchoolHistory':
                                iconName = focused
                                    ? 'time-outline'
                                    : 'time-outline';
                                break;
                            case 'Reward':
                                iconName = focused
                                    ? 'gift-outline'
                                    : 'gift-outline';
                                break;

                            default:
                                break;
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                drawerContentOptions={{
                    labelStyle: {
                        fontSize: 16,
                    },
                    activeTintColor: '#41a6dc',
                    inactiveTintColor: 'gray',
                }}
            >
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                    }}
                />
            </Drawer.Navigator>
        </>
    );
};

export default AppNavigator;

const Home = () => <Text>Home</Text>;
