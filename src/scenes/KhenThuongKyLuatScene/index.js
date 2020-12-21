import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import GoBackHeader from '_molecules/GoBackHeader';
import KhenThuongKyLuatOrganism from '_organisms/KhenThuongKyLuatOrganism';

const KhenThuongKyLuatScene = () => {
    const data = [
        {
            id: 1,
            hocKy: 'Spring 2019',
            date: '30-05-2019',
            content: 'Sinh viên giỏi',
            soQuyetDinh: '737/QĐ-ĐHFPT',
            nguoiKy: 'Vũ Chí Thành',
            note: '',
        },
        {
            id: 2,
            hocKy: 'Spring 2019',
            date: '30-05-2019',
            content: 'Sinh viên giỏi',
            soQuyetDinh: '737/QĐ-ĐHFPT',
            nguoiKy: 'Vũ Chí Thành',
            note: '',
        },
    ];

    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <KhenThuongKyLuatOrganism data={item} />}
            keyExtractor={(item) => `${item.id}`}
            ListHeaderComponent={() => (
                <GoBackHeader
                    titleContent="Khen thưởng / Kỷ luật"
                    route="Home"
                />
            )}
        />
    );
};

export default KhenThuongKyLuatScene;

const styles = StyleSheet.create({});
