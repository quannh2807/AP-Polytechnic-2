import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({
    placeholder = "Nhập số điện thoại phụ huynh học sinh",
    styles,
    handleHideText,
}) => (
    <TextInput
        style={[stylesIput.inputStyle, styles.atoms]}
        placeholder={placeholder}
        onChange={() => handleHideText(false)}
    />
);

export default Input;

const stylesIput = StyleSheet.create({
    inputStyle: {
        borderRadius: 30,
        width: 322,
        height: 60,
        backgroundColor: "#f0f0f0",
        paddingLeft: 20,
        fontSize: 14,
        borderWidth: 0.1,
    },
});
