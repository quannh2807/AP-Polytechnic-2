import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NewsOrganims from '_organisms/NewsOrganism';
import { BG_LIGHT } from '_styles/colors';

const NewsTemplate = ({ data }) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
            <NewsOrganims
                data={item}
                onPress={() => navigation.navigate('DetailEmpty', item)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG_LIGHT,
        paddingTop: 5,
    },
});
export default NewsTemplate;
