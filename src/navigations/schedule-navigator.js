import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Colors } from '_styles';
import LichHocScene from '_scenes/LichHocScene';
import LichThiScene from '_scenes/LichThiScene';
import DiemDanhScene from '_scenes/DiemDanhScene';

const ScheduleTab = createMaterialTopTabNavigator();

const ScheduleNavigator = () => {
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
            initialRouteName="LichHoc"
        >
            <ScheduleTab.Screen
                name="LichHoc"
                component={LichHocScene}
                options={{
                    title: 'Lịch học',
                }}
            />
            <ScheduleTab.Screen
                name="LichThi"
                component={LichThiScene}
                options={{
                    title: 'Lịch thi',
                }}
            />
            <ScheduleTab.Screen
                name="DiemDanh"
                component={DiemDanhScene}
                options={{
                    title: 'Điểm danh',
                }}
            />
        </ScheduleTab.Navigator>
    );
};

export default ScheduleNavigator;
