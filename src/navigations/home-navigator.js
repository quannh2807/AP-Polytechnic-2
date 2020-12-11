import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '_styles';

import NewsNavigator from '_navigations/news-navigator';
import SchedleNavigator from '_navigations/schedule-navigator';
import ScoreNavigator from '_navigations/score-navigator';

import ThongTinThemScene from '_scenes/ThongTinThemScene';

import CustomStatusBar from '_molecules/CustomStatusBar';
import NotificationBar from '_molecules/NotificationBar';

const HomeBottomTab = createBottomTabNavigator();

const HomeNavigator = () => (
    <>
        <CustomStatusBar />
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
                            iconName = focused
                                ? 'calendar'
                                : 'calendar-outline';
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
                activeTintColor: Colors.PRIMARY,
                inactiveTintColor: Colors.GRAY_DARK,
                showLabel: false,
                style: { paddingVertical: 8 },
            }}
            initialRouteName="News"
        >
            <HomeBottomTab.Screen name="News" component={NewsNavigator} />
            <HomeBottomTab.Screen
                name="Schedule"
                component={SchedleNavigator}
            />
            <HomeBottomTab.Screen name="Score" component={ScoreNavigator} />
            <HomeBottomTab.Screen name="Option" component={ThongTinThemScene} />
        </HomeBottomTab.Navigator>
    </>
);

export default HomeNavigator;
