import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OptionItem from '_molecules/OptionItem';
import { Colors } from '_styles';

const ThongTinThemScene = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thông tin thêm</Text>
            <View>
                <OptionItem
                    iconName="heart-half-outline"
                    contentTitle="Khen thưởng & Kỷ luật"
                    contentSubTitle="Thông tin khen thưởng"
                    routeName="Awards"
                />
                <OptionItem
                    iconName="planet-outline"
                    contentTitle="Dịch vụ trực tuyến"
                    contentSubTitle="Sử dụng các dịch vụ trực tuyến"
                    routeName="OnlineServices"
                />
                <OptionItem
                    iconName="call-outline"
                    contentTitle="SMS"
                    contentSubTitle="Danh sách số điện thoại nhận thông tin"
                    routeName="SMS"
                />
            </View>
        </View>
    );
};

export default ThongTinThemScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,

        paddingHorizontal: 10,
    },

    title: {
        fontSize: 24,
        color: '#5c5c5c',
        paddingVertical: 20,
    },
});
