import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '_styles';

const Select = () => {
    const [CoSoDaoTao, SetCoSoDaoTao] = useState('default');

    return (
        <Picker
            selectedValue={CoSoDaoTao}
            onValueChange={(itemValue) => SetCoSoDaoTao(itemValue)}
            style={styles.pickerStyle}
            dropdownIconColor={Colors.BLACK}
            prompt="Chọn cơ sở đào tạo"
        >
            <Picker.Item label="Chọn cơ sở đào tạo" value="default" />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
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
