import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Colors } from '_styles';

const Filters = () => {
    const [filters, setFilters] = useState([
        { id: 1, label: '7 ngày tới', value: '7ngay' },
        { id: 2, label: '14 ngày tới', value: '14ngay' },
        { id: 3, label: '30 ngày tới', value: '30ngay' },
    ]);

    const [selected, setSelected] = useState('7ngay');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thời gian</Text>

            <View style={styles.pickerSection}>
                <Picker
                    selectedValue={selected}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelected(itemValue)}
                >
                    {filters.map((item) => (
                        <Picker.Item
                            label={item.label}
                            value={item.value}
                            key={item.id}
                        />
                    ))}
                </Picker>
            </View>

            <Text style={styles.title}>
                Lựa chọn thời gian để hiển thị chi tiết lịch học
            </Text>
        </View>
    );
};

export default Filters;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    pickerSection: {
        borderColor: Colors.GRAY_LIGHT,
        borderWidth: 1,
        borderRadius: 8,
    },
    picker: {
        color: Colors.GRAY_DARK,
        height: 40,
    },

    title: {
        color: Colors.GRAY_DARK,
    },
});
