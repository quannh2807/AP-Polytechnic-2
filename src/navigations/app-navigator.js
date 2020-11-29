import React from 'react';
import { useWindowDimensions, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '_navigations/home-navigator';
import DrawerContent from '_navigations/DrawerContent';
import PersonalInfoScene from '_scenes/PersonalInfoScene';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 768;

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerType={isLargeScreen ? 'permanent' : 'back'}
            drawerContent={(props) => <DrawerContent props={props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen
                name="PersonalInfomation"
                component={PersonalInfoScene}
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
