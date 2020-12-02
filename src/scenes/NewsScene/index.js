import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View } from 'react-native';

import { PRIMARY } from '_styles/colors';
import NewsTemplate from '_templates/NewsTemplate';

const Tab = createMaterialTopTabNavigator();

const NewsScene = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 16
                    },
                    activeTintColor: PRIMARY,
                    inactiveTintColor: 'black',
                    indicatorStyle: {
                        backgroundColor: PRIMARY
                    }
                }}
            >
                <Tab.Screen name="Học Tập" component={NewsTemplate} />
                <Tab.Screen name="Hoạt Động" component={NewsTemplate} />
                <Tab.Screen name="Học Phí" component={NewsTemplate} />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default NewsScene;
