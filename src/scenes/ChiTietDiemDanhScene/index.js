import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';

import GoBackHeader from '_molecules/GoBackHeader';
import { Colors } from '_styles';

const DUMMY_DATA = [
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
    ['10/11/2020 - Tuesday', 4, 2],
];

let TABLE_NO = [];

DUMMY_DATA.map((item, index) => TABLE_NO.push(index + 1));

const TABLE_HEAD = ['Buổi', 'Ngày học', 'Ca', 'Trạng thái'];

const ChiTietDiemDanh = () => {
    return (
        <>
            <GoBackHeader
                route="DiemDanh"
                titleContent="Khởi sự doanh nghiệp"
            />
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 0.5 }}>
                    <Row
                        data={TABLE_HEAD}
                        flexArr={[1, 4, 1, 2]}
                        style={styles.head}
                        textStyle={styles.text}
                    />
                    <TableWrapper style={styles.wrapper}>
                        <Col
                            data={TABLE_NO}
                            style={styles.title}
                            heightArr={[28, 28]}
                            textStyle={styles.text}
                        />
                        <Rows
                            data={DUMMY_DATA}
                            flexArr={[4, 1, 2]}
                            style={styles.row}
                            textStyle={styles.text}
                        />
                    </TableWrapper>
                </Table>
            </View>
        </>
    );
};

export default ChiTietDiemDanh;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    head: { height: 40, backgroundColor: Colors.GRAY_MEDIUM },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 },
    text: { textAlign: 'center' },
});
