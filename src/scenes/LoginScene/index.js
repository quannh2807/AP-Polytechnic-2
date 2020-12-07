import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '_styles';
import Button from '_atoms/Button';
import Select from '_atoms/Select';
import SwiperMolecule from '_molecules/SwiperMolecule';

const LoginScene = () => {
    const navigation = useNavigation();

    const [coSoDT, setCoSoDT] = useState([
        { id: 1, label: 'Hà Nội', value: 'hanoi' },
        { id: 2, label: 'Đà Nẵng', value: 'dangnang' },
        { id: 3, label: 'Thành phố Hồ Chí Minh', value: 'hcm' },
        { id: 4, label: 'Tây Nguyên', value: 'taynguyen' },
        { id: 5, label: 'Cần Thơ', value: 'cantho' },
        { id: 6, label: 'HiTech', value: 'hitech' },
    ]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />

            <View style={styles.header}>
                <SwiperMolecule />
            </View>

            <View style={styles.login}>
                <View style={styles.mainInfo}>
                    <View style={styles.hocSinh}>
                        <View style={[styles.picker, styles.button]}>
                            <Select data={coSoDT} />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('App')}
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
                            onPress={() => navigation.navigate('ParentLogin')}
                        >
                            <Button title="Đăng nhập bằng tài khoản phụ huynh" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.moreInfo}>
                    <View style={styles.version}>
                        <View>
                            <Text style={{ color: Colors.GRAY_MEDIUM }}>
                                Phiên bản 0.1
                            </Text>
                            <Text style={{ color: Colors.GRAY_MEDIUM }}>
                                Bản quyền FPT
                            </Text>
                        </View>
                    </View>
                    <View style={styles.help}>
                        <Text style={{ color: Colors.SECONDARY }}>Giúp đỡ</Text>
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
    },
    help: {
        flex: 1,
        alignItems: 'center',
    },
});
