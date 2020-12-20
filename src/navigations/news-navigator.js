import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import tinTucApi from '_api/tinTucApi';

import { PRIMARY } from '_styles/colors';
import NewsTemplate from '_templates/NewsTemplate';

const Tab = createMaterialTopTabNavigator();

const NewsNavigator = () => {
    const [listNews, setListNews] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const res = await tinTucApi.getAll();
                setListNews(res);
            }

            fetchData();
        } catch (error) {
            console.log('Failed to fetch news data: ', error);
        }
    }, []);

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
                    return <NewsTemplate data={listNews} />;
                }}
                options={{ title: 'Học tập' }}
            />
            <Tab.Screen
                name="HoatDong"
                children={() => {
                    return <NewsTemplate data={listNews} />;
                }}
                options={{ title: 'Hoạt động' }}
            />
            <Tab.Screen
                name="ChiPhi"
                children={() => {
                    return <NewsTemplate data={listNews} />;
                }}
                options={{ title: 'Chi phí' }}
            />
        </Tab.Navigator>
    );
};

export default NewsNavigator;
