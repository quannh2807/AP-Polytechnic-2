import React from 'react';
import { StyleSheet, FlatList, View, ScrollView } from 'react-native';
import ScheduleItem from '_molecules/ScheduleItem';
import Filters from '_molecules/Filters';

import { Colors } from '_styles';

const data = [
    {
        id: 1,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '4',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 6, Quiz 6',
    },
    {
        id: 2,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '1',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 4, Quiz4',
    },
    {
        id: 3,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '4',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 6, Quiz 6',
    },
    {
        id: 4,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '4',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 6, Quiz 6',
    },
    {
        id: 5,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '4',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 6, Quiz 6',
    },
    {
        id: 6,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '4',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 6, Quiz 6',
    },
    {
        id: 7,
        ngay: 'Thứ Hai 07/12/2020',
        phong: 'P307',
        giangDuong: 'TVB',
        maMon: 'WEB207',
        monHoc: 'Front-end Framework',
        lop: 'PT15202-UD',
        giangVien: 'datlt',
        ca: '4',
        thoiGian: '14:10:00 - 16:10:00',
        noiDung: 'Lab 6, Quiz 6',
    },
];

const ScheduleTemplate = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.filterSection}>
                <Filters />
            </View>

            <View style={styles.contentSection}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ScheduleItem item={item} />}
                    keyExtractor={(item) => `${item.id}`}
                />
            </View>
        </ScrollView>
    );
};

export default ScheduleTemplate;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F4F4F4',
    },

    filterSection: {
        margin: 10,
        marginTop: 10,
        borderRadius: 8,
        backgroundColor: Colors.WHITE,
    },

    contentSection: {
        flex: 1,
        marginHorizontal: 10,
    },
});
