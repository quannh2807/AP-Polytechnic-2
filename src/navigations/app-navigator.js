import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '_navigations/home-navigator';
import DrawerScene from '_scenes/DrawerScene';
import PersonalInfoScene from '_scenes/PersonalInfoScene';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerScene props={props} />}
        options
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
            name="PersonalInfomation"
            component={PersonalInfoScene}
            options={{
                header: ({ scene }) => {
                    const { options } = scene.descriptor;
                    const title =
                        options.headerTitle !== undefined
                            ? options.headerTitle
                            : options.title !== undefined
                            ? options.title
                            : scene.route.name;

                    return (
                        <MyHeader
                            title={title}
                            leftButton={
                                <DrawerToggleButton
                                    onPress={
                                        scene.descriptor.navigation.toggleDrawer
                                    }
                                />
                            }
                            style={options.headerStyle}
                        />
                    );
                },
            }}
        />
        <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
);
export default AppNavigator;

const Logout = () => <Text>Logout</Text>;
