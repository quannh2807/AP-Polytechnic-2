import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputDisable from '_atoms/InputDisable';

import { Colors } from '_styles';

const PersonalInfoMolecule = ({ title, content }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: Colors.GRAY_DARK }}>{title}</Text>
            <InputDisable content={content} />
        </View>
    );
};

export default PersonalInfoMolecule;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
});
