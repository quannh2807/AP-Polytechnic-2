import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { PRIMARY } from '_styles/colors';
import NewsTemplate from '_templates/NewsTemplate';

const Tab = createMaterialTopTabNavigator();

const NewsNavigator = () => {
    const data = [
        {
            id: '1',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
        {
            id: '2',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020 aadf adfasdfasdfasd asdfasd',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
        {
            id: '3',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
        {
            id: '4',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
        {
            id: '5',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
        {
            id: '6',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
        {
            id: '7',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            use: 'huongnt116',
        },
        {
            id: '8',
            text:
                'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
            created_at: '17:32:15 - 11/11/2020',
            user: 'huongnt116',
        },
    ];
    return (
        <Tab.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 15,
                    textTransform: 'none',
                },
                activeTintColor: PRIMARY,
                inactiveTintColor: 'black',
                indicatorStyle: {
                    backgroundColor: PRIMARY,
                },
            }}
            initialRouteName="HocTap"
        >
            <Tab.Screen
                name="HocTap"
                children={() => {
                    return <NewsTemplate data={data} />;
                }}
                options={{ title: 'Học tập' }}
            />
            <Tab.Screen
                name="HoatDong"
                children={() => {
                    return <NewsTemplate data={data} />;
                }}
                options={{ title: 'Hoạt động' }}
            />
            <Tab.Screen
                name="ChiPhi"
                children={() => {
                    return <NewsTemplate data={data} />;
                }}
                options={{ title: 'Chi phí' }}
            />
        </Tab.Navigator>
    );
};

export default NewsNavigator;
