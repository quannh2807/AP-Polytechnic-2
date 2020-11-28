import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, ...inputProps }) => (
    <TextInput
        style={stylesIput.inputStyle}
        {...inputProps}
        placeholder={placeholder}
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
