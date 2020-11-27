import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from '_scenes/news';
import ScheduleScreen from '_scenes/schedule';
import ScoreScreen from '_scenes/score';
import OptionStack from '_navigations/option-stack';
import NotificationBar from '_molecules/NotificationBar';

const HomeBottomTab = createBottomTabNavigator();

const HomeNavigator = () => (
    <>
        <NotificationBar />

        <HomeBottomTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'News':
                            iconName = focused
                                ? 'newspaper'
                                : 'newspaper-outline';
                            break;
                        case 'Schedule':
                            iconName = focused ? 'list' : 'list-outline';
                            break;
                        case 'Score':
                            iconName = focused ? 'book' : 'book-outline';
                            break;
                        case 'Option':
                            iconName = focused ? 'grid' : 'grid-outline';
                            break;
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarLabel: ({ focused, color }) => {
                    let labelName;
                    switch (route.name) {
                        case 'News':
                            labelName = focused ? (
                                <Text style={{ color }}>Tin tức</Text>
                            ) : null;
                            break;
                        case 'Schedule':
                            labelName = focused ? (
                                <Text style={{ color }}>Lịch học</Text>
                            ) : null;
                            break;
                        case 'Score':
                            labelName = focused ? (
                                <Text style={{ color }}>Điểm</Text>
                            ) : null;
                            break;
                        case 'Option':
                            labelName = focused ? (
                                <Text style={{ color }}>Xem thêm</Text>
                            ) : null;
                            break;
                    }

                    return labelName;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#41a6dc',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 9,
                },
                style: { paddingVertical: 8 },
            }}
            initialRouteName="News">
            <HomeBottomTab.Screen name="News" component={NewsScreen} />
            <HomeBottomTab.Screen name="Schedule" component={ScheduleScreen} />
            <HomeBottomTab.Screen name="Score" component={ScoreScreen} />
            <HomeBottomTab.Screen name="Option" component={OptionStack} />
        </HomeBottomTab.Navigator>
    </>
);

export default HomeNavigator;
