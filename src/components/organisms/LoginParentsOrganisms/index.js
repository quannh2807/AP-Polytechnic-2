import React from 'react';
import { View, StyleSheet } from 'react-native';

import InputMoleCule from '_molecules/InputMoleCule';
import TextHighligh from '_molecules/TextHighligh';
import Button from '_atoms/Button';
import Label from '_atoms/Label';
import Paragraph from '_atoms/Paragraph';

const Login = () => {

    const noteUsername = '- Phụ huynh sử dụng số điện thoại đăng ký với nhà trường để đăng nhập';

    const placeHoldeUsername = 'Username: nhập số điện thoại phụ huynh';
    const placeHoldePassword = 'Password';
    const label = 'ĐĂNG NHẬP';

    return (
        <>
            <View style={styles.fexLabel}>
                <View style={styles.itemFlexLabel}>
                    <Label text={label} />
                </View>
            </View>
            <View style={styles.fexContainer}>
                <View style={styles.boxForm}>
                    <InputMoleCule placeholder={placeHoldeUsername} />
                    <InputMoleCule placeholder={placeHoldePassword} />
                    <View style={styles.button}>
                        <Button />
                    </View>
                    <View style={styles.paragraphs}>
                        <Paragraph paragraph={noteUsername} />
                        <TextHighligh style={styles.paragraphs} />
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    fexLabel: {
        flex: 1,
    },
    itemFlexLabel: {
        alignItems: 'center',
        paddingTop: 75
    },
    fexContainer: {
        flex: 3,
    },
    boxForm: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    paragraphs: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
    }
})
export default Login;