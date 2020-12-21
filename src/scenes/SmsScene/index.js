import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import GoBackHeader from '_molecules/GoBackHeader';
import SmsOrganisms from '_organisms/SmsOrganisms';

const SmsScene = () => {
    const data = [
        {
            id: '1',
            status: 'Kích hoạt',
            type: 'Phụ huynh',
            number: '09284930293',
            name: 'MyParent',
            date_created: '2020-8-12 15:05:50',
        },
        {
            id: '2',
            type: 'Phụ huynh',
            number: '09284930293',
            status: 'Kích hoạt',
            name: 'Giang A Chu',
            date_created: '2020-8-12 15:05:50',
        },
    ];
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <SmsOrganisms data={item} />}
            keyExtractor={(item) => `${item.id}`}
            ListHeaderComponent={() => (
                <GoBackHeader
                    titleContent="Danh sách số điện thoại nhận SMS"
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
export default SmsScene;
