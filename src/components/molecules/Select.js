import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = (props) => {
  const {listItem} = props;
  const [itemSelected, setItemSelected] = useState([{label: 'default'}]);

  return (
    <Picker
      selectedValue={itemSelected.label}
      style={styles.container}
      onValueChange={(itemValue, itemIndex) => {
        setItemSelected({label: itemValue});
      }}
      mode="dropdown">
      <Picker.Item label="Chọn Cơ Sở Đào Tạo" value="default" />
      {listItem.map((item) => (
        <Picker.Item label={item.label} value={item.value} key={item.id} />
      ))}
    </Picker>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    width: '65%',
    marginVertical: 30,
  },
});
