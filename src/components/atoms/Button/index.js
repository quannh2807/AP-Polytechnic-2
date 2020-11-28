import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Typography } from '_styles';
import CutomIcon from '_atoms/CutomIcon';

const Button = ({
    title = 'Đăng nhập',
    color = Colors.BLACK,
    borderColor = color,
    icon = null,
}) => {
    let customStyle = icon
        ? { justifyContent: 'space-evenly', flexDirection: 'row' }
        : '';

    return (
        <View
            style={[
                styles.container,
                customStyle,
                { borderColor: borderColor },
            ]}
        >
            {icon && <CutomIcon name={icon} color={color} />}
            <Text style={[styles.text, Typography.FONT_BOLD, { color: color }]}>
                {title}
            </Text>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 30,
        height: 60,
        width: 322,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
    },
});
