import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { Colors } from '_styles';
import Button from '_atoms/Button';
import Select from '_atoms/Select';
import SwiperMolecule from '_molecules/SwiperMolecule';

const LoginScene = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SwiperMolecule />
            </View>

            <View style={styles.login}>
                <View style={styles.mainInfo}>
                    <View style={styles.hocSinh}>
                        <View style={[styles.picker, styles.button]}>
                            <Select />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('say hi')}
                        >
                            <Button
                                title="Đăng nhập bằng Google"
                                color={Colors.PRIMARY}
                                icon="logo-google"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.phuHuynh}>
                        <View style={styles.orChoose}>
                            <Text style={styles.chooseText}>Hoặc</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('say hi')}
                        >
                            <Button title="Đăng nhập bằng tài khoản phụ huynh" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.moreInfo}>
                    <View style={styles.version}>
                        <Text style={{ color: Colors.GRAY_MEDIUM }}>
                            Phiên bản 0.1
                        </Text>
                        <Text style={{ color: Colors.GRAY_MEDIUM }}>
                            Bản quyền FPT
                        </Text>
                    </View>
                    <View style={styles.help}>
                        <Text>Giúp đỡ</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default LoginScene;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    header: {
        flex: 2,
    },

    login: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
    },

    hocSinh: {},
    picker: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 50,
        alignItems: 'center',

        height: 60,
        width: 322,
    },
    button: {
        marginVertical: 10,
    },

    phuHuynh: {
        marginTop: 10,
        paddingTop: 10,
        borderTopColor: 'rgba(0,0,0,.5)',
        borderTopWidth: 2,
    },
    orChoose: {
        alignItems: 'center',
    },
    chooseText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        position: 'absolute',
        top: -22,
    },

    moreInfo: {
        flexDirection: 'row',
    },
    version: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    help: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
