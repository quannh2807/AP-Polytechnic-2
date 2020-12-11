import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from '_atoms/CustomIcon';
import { Colors } from '_styles';

const Box = ({ nameIcon, children, routeName }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.contentSection}>{children}</View>

            <TouchableOpacity
                style={styles.navigatorSection}
                onPress={() => navigation.navigate(routeName)}
            >
                <CustomIcon name={nameIcon} color={Colors.GRAY_DARK} />
            </TouchableOpacity>
        </View>
    );
};

export default Box;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        padding: 10,
        borderColor: '#E8E8E8',
        borderWidth: 1,
    },

    contentSection: {
        flex: 7,
    },

    navigatorSection: {
        flex: 1,
        width: 50,
        height: 50,
    },
});
