import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import TextCommon from '_atoms/TextCommon';
import TextColor from '_atoms/TextColor';
import { BG_LIGHT, WHITE } from '_styles/colors';

const AwardOrganism = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TextColor color={'#008000'} content={data.semester} />
                <View>
                    <View style={styles.content}>
                        <TextCommon text={`Ngày tháng: ${data.date} `} />
                    </View>

                    <View style={styles.content}>
                        <TextCommon text={`Nội dung: ${data.content} `} />
                    </View>
                    <View style={styles.content}>
                        <TextCommon text={`Người ký: ${data.principal}`} />
                    </View>
                    <View style={styles.content}>
                        <TextCommon text={`Quyết định: ${data.dicide}`} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: BG_LIGHT,
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: WHITE,
        alignItems: 'center',
        padding: 5,
        borderRadius: 8,
    },
    content: {
        padding: 5,
    },
});

export default AwardOrganism;
