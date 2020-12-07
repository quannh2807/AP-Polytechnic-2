import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import CustomIcon from '_atoms/CustomIcon';
import { Colors, Typography } from '_styles';

const ScheduleItem = ({ item }) => {
    const [expand, setExpand] = useState(false);
    const handlePressExpand = () => setExpand(!expand);

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <View style={styles.leftSection}>
                    <Text style={Typography.FONT_BOLD}>{item.phong}</Text>
                    <Text> - </Text>
                    <Text style={Typography.FONT_BOLD}>Ca {item.ca}</Text>
                </View>
                <View style={styles.centerSection}>
                    <View>
                        <Text style={Typography.FONT_BOLD}>{item.ngay}</Text>
                        <Text>{item.monHoc}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.rightSection}
                    onPress={handlePressExpand}
                >
                    <CustomIcon
                        name={
                            !expand
                                ? 'chevron-forward-outline'
                                : 'chevron-down-outline'
                        }
                        color={Colors.GRAY_DARK}
                        size={28}
                    />
                </TouchableOpacity>
            </View>

            {expand && (
                <View style={styles.expandSection}>
                    <View>
                        <Text>
                            Giảng đường:&nbsp;
                            <Text style={Typography.FONT_BOLD}>
                                {item.giangDuong}
                            </Text>
                        </Text>
                        <Text>
                            Thời gian:&nbsp;
                            <Text style={Typography.FONT_BOLD}>
                                {item.thoiGian}
                            </Text>
                        </Text>
                        <Text>
                            Nội dung:&nbsp;
                            <Text style={Typography.FONT_BOLD}>
                                {item.noiDung}
                            </Text>
                        </Text>
                    </View>

                    <View>
                        <Text>
                            Mã môn:&nbsp;
                            <Text style={Typography.FONT_BOLD}>
                                {item.maMon}
                            </Text>
                        </Text>
                        <Text>
                            Lớp:&nbsp;
                            <Text style={Typography.FONT_BOLD}>{item.lop}</Text>
                        </Text>
                        <Text>
                            Giảng viên:&nbsp;
                            <Text style={Typography.FONT_BOLD}>
                                {item.giangVien}
                            </Text>
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
};

export default ScheduleItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        marginBottom: 5,
    },

    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 5,
        paddingVertical: 10,
    },

    leftSection: {
        flex: 2,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 10,
    },
    centerSection: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    expandSection: {
        borderTopColor: Colors.GRAY_LIGHT,
        borderTopWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
