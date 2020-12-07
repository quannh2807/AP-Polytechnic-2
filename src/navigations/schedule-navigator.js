import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Colors } from '_styles';
import LichHocScene from '_scenes/LichHocScene';
import LichThiScene from '_scenes/LichThiScene';

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
                component={LichThiScene}
                options={{
                    title: 'Điểm danh',
                }}
            />
        </ScheduleTab.Navigator>
    );
};

export default ScheduleNavigator;
