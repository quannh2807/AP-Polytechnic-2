import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '_styles';

const KhenThuongKyLuatOrganism = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.hocKy}>{data.hocKy}</Text>

                <View style={styles.mainContent}>
                    <Text>Ngày tháng: {data.date}</Text>
                    <Text>Nội dung: {data.content}</Text>
                    <Text>Người ký: {data.nguoiKy}</Text>
                    <Text>Số quyết định: {data.soQuyetDinh}</Text>
                </View>
            </View>
        </View>
    );
};

export default KhenThuongKyLuatOrganism;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BG_LIGHT,
        marginTop: 10,
        marginHorizontal: 10,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        padding: 10,
        borderColor: '#E8E8E8',
        borderWidth: 1,
    },

    hocKy: {
        flex: 1,
        color: '#008000',
    },

    mainContent: {
        flex: 3,
        paddingLeft: 10,
    },
});
