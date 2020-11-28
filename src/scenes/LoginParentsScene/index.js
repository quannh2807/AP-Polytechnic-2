import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import InputMoleCule from '_molecules/InputMoleCule';
import Button from '_atoms/Button';
import Label from '_atoms/Label';
import TextBold from '_atoms/TextBold';

const LoginParents = () => {
    const placeHoldeUsername = 'Username: nhập số điện thoại phụ huynh';
    const placeHoldePassword = 'Password';

    return (
        <View style={styles.container}>
            <View>
                <Label text="ĐĂNG NHẬP" />
            </View>

            <View>
                <InputMoleCule placeholder={placeHoldeUsername} />
                <InputMoleCule placeholder={placeHoldePassword} />

                <View style={styles.button}>
                    <Button />
                </View>
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
});
export default LoginParents;
