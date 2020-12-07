import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import GoBackHeader from '_molecules/GoBackHeader';

import PersonalInfoOrganism from '_organisms/PersonalInfoOrganism';

const PersonalInfoScene = () => {
    const [thongTinSinhVien, setThongTinSinhVien] = useState([
        {
            title: 'Thông tin cá nhân',
            data: [
                { title: 'Họ tên', value: 'Nguyễn Hồng Quân' },
                { title: 'Mã sinh viên', value: 'PH09166' },
                { title: 'Giới tính', value: 'Nam' },
                { title: 'Ngày sinh', value: '28/07/1997' },
                {
                    title: 'Địa chỉ',
                    value: 'Xóm 2, xã Hải Phong, huyện Hải Hậu, Tỉnh Nam Định',
                },
            ],
        },
        {
            title: 'CMND/ Căn Cước/ Hộ Chiếu',
            data: [
                { title: 'Số', value: '163457636' },
                { title: 'Ngày cấp', value: '2015-03-29' },
                { title: 'Nơi cấp', value: 'Nam Định' },
            ],
        },
        {
            title: 'Thông tin học tập',
            data: [
                { title: 'Mã tài khoản', value: 'quannhph09166' },
                { title: 'Khóa', value: '15.1' },
                { title: 'Chuyên ngành', value: 'Thiết kế website (CNTT)' },
                { title: 'Ngày nhập học', value: '16-11-2018' },
            ],
        },
        {
            title: 'Tích hợp',
            data: [{ title: 'Văn bằng tốt nghiệp', value: '0000000000' }],
        },
    ]);

    return (
        <ScrollView style={styles.container}>
            <GoBackHeader route="Home" titleContent="Thông tin cá nhân" />

            <View style={styles.mainSection}>
                {thongTinSinhVien.map((item, index) => (
                    <PersonalInfoOrganism thongTin={item} key={index} />
                ))}
            </View>
        </ScrollView>
    );
};

export default PersonalInfoScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainSection: {
        margin: 10,
        marginBottom: 0,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
});
