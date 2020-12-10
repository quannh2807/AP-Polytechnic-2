import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import ScheduleItem from '_molecules/ScheduleItem';
import Filters from '_molecules/Filters';

import { Colors } from '_styles';

const ScheduleTemplate = ({ data }) => (
    <FlatList
        ListHeaderComponent={
            <View style={styles.filterSection}>
                <Filters />
            </View>
        }
        style={styles.container}
        data={data}
        renderItem={({ item }) => <ScheduleItem item={item} />}
        keyExtractor={(item) => `${item.id}`}
    />
);

export default ScheduleTemplate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        paddingHorizontal: 10,
    },

    filterSection: {
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: Colors.WHITE,
    },
});
