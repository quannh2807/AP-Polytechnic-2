import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PersonalInfoMolecule from '_molecules/PersonalInfoMolecule';

const PersonalInfoOrganism = ({ thongTin }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{thongTin.title}</Text>
            </View>

            <View style={styles.main}>
                {thongTin.data.map((item, index) => (
                    <PersonalInfoMolecule
                        title={item.title}
                        content={item.value}
                        key={index}
                    />
                ))}
            </View>
        </View>
    );
};

export default PersonalInfoOrganism;

const styles = StyleSheet.create({
    container: {},
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 18,
    },

    main: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
});
