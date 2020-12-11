import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextBold from '_atoms/TextBold';
import TextColor from '_atoms/TextColor';
import Box from '_molecules/Box';

const DiemDanhOrganism = ({ subject }) => {
    const tongSoBuoiHoc = subject.number_of_classes.length;
    const tongSoBuoiDaHoc = subject.number_of_classes.filter(
        (item) => item.status === 0,
    ).length;
    const tongSoBuoiNghi = subject.number_of_classes.filter(
        (item) => item.status === 1,
    ).length;

    return (
        <View style={styles.container}>
            <Box nameIcon="chevron-forward-outline" routeName="ChiTietDiemDanh">
                <TextBold text="Front-End Frameworks (WEB207)" />

                <View style={styles.subContent}>
                    <Text style={styles.missClass}>
                        Vắng:
                        <TextColor
                            color="#FF0000"
                            content={`${tongSoBuoiNghi}/${tongSoBuoiDaHoc}`}
                        />
                        tới hiện tai
                    </Text>
                    <Text style={styles.missClass}>
                        Vắng:
                        <TextColor
                            color="#FF0000"
                            content={`${tongSoBuoiNghi}/${tongSoBuoiHoc}`}
                        />
                        trên tổng số
                    </Text>
                </View>
            </Box>
        </View>
    );
};

export default DiemDanhOrganism;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },

    subContent: {
        marginTop: 5,
    },
    missClass: {
        fontSize: 13,
    },
});
