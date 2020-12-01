import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Colors } from '_styles';
import NewsScene from '_scenes/NewsScene';
import DetailNewsScene from '_scenes/DetailNewsScene';

const HomeBottomTab = createBottomTabNavigator();

const HomeNavigator = () => (
    <HomeBottomTab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'News':
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                        break;
                    case 'Schedule':
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        break;
                    case 'Score':
                        iconName = focused ? 'book' : 'book-outline';
                        break;
                    case 'Option':
                        iconName = focused ? 'grid' : 'grid-outline';
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
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
        <HomeBottomTab.Screen name="DetailEmpty" component={DetailNewsScene} />
        <HomeBottomTab.Screen name="News" component={NewsScreen} />
        <HomeBottomTab.Screen name="Schedule" component={ScheduleScreen} />
        <HomeBottomTab.Screen name="Score" component={ScoreScreen} />
        <HomeBottomTab.Screen name="Option" component={OptionStack} />
    </HomeBottomTab.Navigator>
);

export default HomeNavigator;

const NewsScreen = () => <NewsScene />;
const ScheduleScreen = () => <Text>News Screen</Text>;
const ScoreScreen = () => <Text>News Screen</Text>;
const OptionStack = () => <Text>News Screen</Text>;
