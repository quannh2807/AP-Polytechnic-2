import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Colors } from '_styles';
import ScheduleTemplate from '_templates/ScheduleTemplate';

const ScheduleTab = createMaterialTopTabNavigator();

const ScheduleScene = () => {
    return (
        <ScheduleTab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 15,
                    textTransform: 'capitalize',
                },
                activeTintColor: Colors.PRIMARY,
                inactiveTintColor: 'black',
                indicatorStyle: {
                    backgroundColor: Colors.PRIMARY,
                },
            }}
        >
            <ScheduleTab.Screen
                name="LichHoc"
                component={ScheduleTemplate}
                options={{
                    title: 'Lịch học',
                }}
            />
            <ScheduleTab.Screen
                name="LichThi"
                component={demo}
                options={{
                    title: 'Lịch thi',
                }}
            />
            <ScheduleTab.Screen
                name="DiemDanh"
                component={demo}
                options={{
                    title: 'Điểm danh',
                }}
            />
        </ScheduleTab.Navigator>
    );
};

export default ScheduleScene;

const demo = () => <Text>ANC</Text>;
