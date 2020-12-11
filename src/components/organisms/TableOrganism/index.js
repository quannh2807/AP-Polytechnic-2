import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { GRAY_LIGHT, BG_LIGHT } from '_styles/colors';

const TableOrganism = ({ route }) => {
    const { row } = route.params;
    const dataTable = [
        ['document', '10', ''],
        ['presentation', '10', ''],
        ['assignment_1', '10', ''],
        ['assignment_2', '10', ''],
        ['lab1', '10', ''],
        ['lab2', '10', ''],
        ['lab3', '10', ''],
        ['lab4', '10', ''],
        ['lab5', '10', ''],
        ['lab6', '10', ''],
        ['lab7', '10', ''],
        ['lab8', '10', ''],
        ['lab9', '10', ''],
    ];
    const footer = [
        ['Tổng điểm: ', '9'],
        ['Trạng thái: ', 'passed'],
    ];

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1, borderColor: GRAY_LIGHT }}>
                <Row data={row} style={styles.head} textStyle={styles.text} />
                <Rows
                    data={dataTable}
                    textStyle={styles.text}
                    style={styles.rows}
                />
                <Row
                    data={footer}
                    style={styles.head}
                    textStyle={styles.footer}
                />
            </Table>
        </View>
    );
};
export default TableOrganism;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    head: {
        height: 40,
        backgroundColor: BG_LIGHT,
    },
    text: {
        margin: 6,
        textAlign: 'center',
    },
    footer: {
        margin: 6,
        color: '#000',
        textAlign: 'center',
    },
    colorActive: {
        color: 'red',
    },
    rows: {
        height: 40,
    },
});
