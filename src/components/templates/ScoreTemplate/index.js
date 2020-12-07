import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ScoreOrganism from '_organisms/ScoreOrganism';
import { GRAY_LIGHT } from '_styles/colors';

const ScoreTemplate = ({ data, tableHead }) => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <ScoreOrganism
                data={item}
                onPress={() =>
                    navigation.navigate('Table', {
                        rows: item,
                        row: tableHead,
                    })
                }
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
        backgroundColor: GRAY_LIGHT,
        paddingTop: 5,
        flex: 1,
    },
});
export default ScoreTemplate;
