import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { PRIMARY } from '_styles/colors';
import ScoreTemplate from '_templates/ScoreTemplate';

const Tab = createMaterialTopTabNavigator();

const ScoreNavigator = () => {
    const [score, setScore] = useState(true);

    const tableHead = ['Tên đầu điểm', 'Trọng số', 'Điểm'];
    const data = [
        {
            id: '1',
            text: 'Khởi sự doanh nghiệp (SYB305)-PT1511WEB',
            score: '9.0',
            status: 'passed',
            document: '10',
            presentation: '30',
            assignment_1: '10',
            assignment_2: '10',
            lab1: '3.5',
            lab2: '3.5',
            lab3: '3.5',
            lab4: '3.5',
            lab5: '3.5',
            lab6: '3.5',
            lab7: '3.5',
            lab8: '3.5',
            quiz1: '3.5',
            quiz2: '3.5',
            quiz3: '3.5',
            quiz4: '3.5',
            quiz5: '3.5',
            quiz6: '3.5',
            quiz7: '3.5',
            quiz8: '3.5',
        },
        {
            id: '2',
            text: 'Khởi sự doanh nghiệp (SYB305)-PT1511WEB',
            score: '9.0',
            status: 'passed',
            document: '10',
            presentation: '30',
            assignment_1: '10',
            assignment_2: '10',
            lab1: '3.5',
            lab2: '3.5',
            lab3: '3.5',
            lab4: '3.5',
            lab5: '3.5',
            lab6: '3.5',
            lab7: '3.5',
            lab8: '3.5',
            quiz1: '3.5',
            quiz2: '3.5',
            quiz3: '3.5',
            quiz4: '3.5',
            quiz5: '3.5',
            quiz6: '3.5',
            quiz7: '3.5',
            quiz8: '3.5',
        },
        {
            id: '3',
            text: 'Khởi sự doanh nghiệp (SYB305)-PT1511WEB',
            score: '9.0',
            status: 'passed',
            document: '10',
            presentation: '30',
            assignment_1: '10',
            assignment_2: '10',
            lab1: '3.5',
            lab2: '3.5',
            lab3: '3.5',
            lab4: '3.5',
            lab5: '3.5',
            lab6: '3.5',
            lab7: '3.5',
            lab8: '3.5',
            quiz1: '3.5',
            quiz2: '3.5',
            quiz3: '3.5',
            quiz4: '3.5',
            quiz5: '3.5',
            quiz6: '3.5',
            quiz7: '3.5',
            quiz8: '3.5',
        },
        {
            id: '4',
            text: 'Khởi sự doanh nghiệp (SYB305)-PT1511WEB',
            score: '9.0',
            status: 'passed',
            document: '10',
            presentation: '30',
            assignment_1: '10',
            assignment_2: '10',
            lab1: '3.5',
            lab2: '3.5',
            lab3: '3.5',
            lab4: '3.5',
            lab5: '3.5',
            lab6: '3.5',
            lab7: '3.5',
            lab8: '3.5',
            quiz1: '3.5',
            quiz2: '3.5',
            quiz3: '3.5',
            quiz4: '3.5',
            quiz5: '3.5',
            quiz6: '3.5',
            quiz7: '3.5',
            quiz8: '3.5',
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
            initialRouteName="KyHoc"
        >
            <Tab.Screen
                name="KyHoc"
                children={() => {
                    return (
                        <ScoreTemplate
                            score={score}
                            data={data}
                            tableHead={tableHead}
                        />
                    );
                }}
                options={{ title: 'Kỳ học' }}
            />
            <Tab.Screen
                name="LichSu"
                children={() => {
                    return (
                        <ScoreTemplate
                            score={score}
                            data={data}
                            tableHead={tableHead}
                        />
                    );
                }}
                options={{ title: 'Lịch sử' }}
            />
            <Tab.Screen
                name="BangDiem"
                children={() => {
                    return (
                        <ScoreTemplate
                            score={score}
                            data={data}
                            tableHead={tableHead}
                        />
                    );
                }}
                options={{ title: 'Bảng điểm' }}
            />
        </Tab.Navigator>
    );
};

export default ScoreNavigator;
