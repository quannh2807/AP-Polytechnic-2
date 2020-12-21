import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import GoBackHeader from '_molecules/GoBackHeader';
import AwardOrganism from '_organisms/AwardOrganism';

const AwardScene = () => {
    const data = [
        {
            id: '1',
            semester: 'Spring 2020',
            content: 'Học sinh giỏi',
            principal: 'MyParent',
            dicide: '77/QD/DHFPT',
            date: '2020-8-12',
        },
        {
            id: '2',
            semester: 'Spring 2020',
            principal: 'Giang A Chu',
            content: 'Học sinh giỏi',
            dicide: '77/QD/DHFPT',
            date: '2020-8-12',
        },
    ];
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <AwardOrganism data={item} />}
            keyExtractor={(item) => `${item.id}`}
            ListHeaderComponent={() => (
                <GoBackHeader
                    titleContent="Khen thưởng/Kỷ luật"
                    route="Option"
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default AwardScene;
