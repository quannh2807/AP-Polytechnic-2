import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '_styles';

const Select = ({ data }) => {
    const [selected, setSelected] = useState('default');

    return (
        <Picker
            selectedValue={selected}
            onValueChange={(itemValue) => setSelected(itemValue)}
            style={styles.pickerStyle}
            dropdownIconColor={Colors.BLACK}
            prompt="Chọn cơ sở đào tạo"
        >
            <Picker.Item label="Chọn cơ sở đào tạo" value="default" />
            {data.map((item, index) => (
                <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={index}
                />
            ))}
        </Picker>
    );
};

export default Select;

const styles = StyleSheet.create({
    pickerStyle: {
        width: '70%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#000',
    },
});
