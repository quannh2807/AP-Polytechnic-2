import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InputMoleCule from '_molecules/InputMoleCule';
import Button from '_atoms/Button';
import Label from '_atoms/Label';
import TextBold from '_atoms/TextBold';
import { Colors } from '_styles';

const LoginParents = () => {
    const placeHoldeUsername = 'Username: nhập số điện thoại phụ huynh';
    const placeHoldePassword = 'Password';
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Label text="ĐĂNG NHẬP" />
            </View>

            <View>
                <View style={styles.input}>
                    <InputMoleCule placeholder={placeHoldeUsername} />
                </View>
                <View style={styles.input}>
                    <InputMoleCule placeholder={placeHoldePassword} />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('News')}
                >
                    <View style={styles.button}>
                        <Button color={Colors.PRIMARY} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.paragraphs}>
                <Text style={styles.text}>
                    - Để lấy mật khẩu truy cập phụ huynh soạn tin nhắn theo cú
                    pháp
                </Text>
                <Text style={styles.text}>
                    - Để lấy mật khẩu truy cập phụ huynh soạn tin nhắn theo cú
                    pháp <TextBold text="POLY MK" /> gửi về đầu số{' '}
                    <TextBold text="8100" />.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    paragraphs: {
        paddingHorizontal: 15,
    },
    text: {
        paddingVertical: 5,
    },
    button: {
        paddingVertical: 20,
    },
    input: {
        paddingVertical: 10
    }
});
export default LoginParents;
