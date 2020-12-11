import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { Colors } from '_styles';
import DiemDanhOrganism from '_organisms/DiemDanhOrganism';

const DATA = [
    {
        id: 1,
        subjectName: 'Khởi sự doanh nghiệp (SYB301)',
        className: 'PT15111-WEB',
        teacher: 'hanq9',
        number_of_classes: [
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 0,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 0,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 1,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 4,
                short_desc: 'Lý thuyết',
                status: 2,
            },
        ],
    },
    {
        id: 2,
        subjectName: 'Front-End Frameworks (WEB207)',
        className: 'PT15111-WEB',
        teacher: 'datlt34',
        number_of_classes: [
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 0,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 0,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 1,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
            {
                date: '10/11/2020 - Tuesday',
                ca: 3,
                short_desc: 'Lý thuyết',
                status: 2,
            },
        ],
    },
];

const DiemDanhScene = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <DiemDanhOrganism subject={item} />}
                keyExtractor={(item) => `${item.id}`}
                style={styles.listSubject}
            />
        </View>
    );
};

export default DiemDanhScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
    },

    listSubject: {
        paddingHorizontal: 10,
    },
});
