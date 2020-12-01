import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputDisable = ({ content }) => (
    <TextInput
        style={styles.input}
        defaultValue={content}
        editable={false}
        autoCapitalize="words"
        multiline={true}
    />
);

export default InputDisable;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 8,
        color: '#000',
        paddingHorizontal: 15,
    },
});
