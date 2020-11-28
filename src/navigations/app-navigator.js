import React from 'react';
import { useWindowDimensions, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '_styles';
import Home from '_navigations/home-navigator';
import DrawerContent from '_navigations/DrawerContent';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 768;

    return (
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
                        case 'PersonalInfomation':
                            iconName = focused
                                ? 'information'
                                : 'information-outline';
                            break;
                        case 'Logout':
                            iconName = focused ? 'log-out' : 'log-out-outline';
                            break;

                        default:
                            break;
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerContentOptions={{
                labelStyle: {
                    fontSize: 16,
                },
                activeTintColor: Colors.PRIMARY,
                inactiveTintColor: 'gray',
            }}
            drawerContent={(props) => <DrawerContent />}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Trang chủ',
                }}
            />
            <Drawer.Screen
                name="PersonalInfomation"
                component={PersonalInfomation}
                options={{
                    title: 'Thông tin cá nhân',
                }}
            />

            <Drawer.Screen
                name="Logout"
                component={Logout}
                options={{
                    title: 'Đăng xuất',
                }}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigator;

const PersonalInfomation = () => <Text>Personal Infomation</Text>;
const Logout = () => <Text>Log out</Text>;
