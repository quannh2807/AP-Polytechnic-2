import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import NewsOrganims from '_organisms/NewsOrganism';
import { GRAY_LIGHT } from '_styles/colors';

const NewsTemplate = ({ navigation }) => {
    const DATA = [
        {
            id: '1',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '2',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '3',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '4',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '5',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '6',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '7',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
        {
            id: '8',
            text: '17:32:15 - 11/11/2020',
            textBold: 'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại black 2 kỳ Fall 2020',
        },
    ];

    const renderItem = ({ item, ...props }) => {
        return < NewsOrganims navigation={navigation}
            news={item} onPress={() => navigation.navigate('DetailEmpty', item)} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GRAY_LIGHT,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
})
export default NewsTemplate;