import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomIcon from '_atoms/CustomIcon';

const OptionItem = ({ iconName, contentTitle, contentSubTitle, routeName }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.optionItem}
            onPress={() => navigation.navigate(routeName)}
        >
            <View style={styles.icon}>
                <CustomIcon name={iconName} color="#858585" />
            </View>

            <View style={styles.content}>
                <Text style={styles.contentTitle}>{contentTitle}</Text>
                <Text style={styles.contentSubTitle}>{contentSubTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default OptionItem;

const styles = StyleSheet.create({
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',

        borderWidth: 2,
        borderColor: '#CCCCCC',
        borderRadius: 10,

        paddingVertical: 15,
        marginBottom: 15,
    },
    icon: {
        paddingHorizontal: 15,
    },

    contentTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    contentSubTitle: {
        fontSize: 13,
        color: '#737373',
    },
});
