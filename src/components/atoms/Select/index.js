import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from '_styles';

const Select = () => {
    const [coSoDT, setCoSoDT] = useState([
        { id: 1, label: 'Hà Nội', value: 'hanoi' },
        { id: 2, label: 'Đà Nẵng', value: 'dangnang' },
        { id: 3, label: 'Thành phố Hồ Chí Minh', value: 'hcm' },
        { id: 4, label: 'Tây Nguyên', value: 'taynguyen' },
        { id: 5, label: 'Cần Thơ', value: 'cantho' },
        { id: 6, label: 'HiTech', value: 'hitech' },
    ]);
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
            {coSoDT.map((item) => (
                <Picker.Item label={item.label} value={item.value} />
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
