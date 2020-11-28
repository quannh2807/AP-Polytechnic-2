import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Typography, Colors } from '_styles';
import avatar from '_assets/images/avatar.jpg';

const DrawerContent = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.avatar}>
                            <Image source={avatar} style={styles.img} />
                        </View>

                        <View>
                            <Text style={Typography.HEADING_4}>
                                Nguyễn Hồng Quân
                            </Text>
                            <Text style={styles.email}>
                                quannhph09166@fpt.edu.vn
                            </Text>
                        </View>
                    </View>

                    <View>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Trang chủ"
                            onPress={() => navigation.navigate('Home')}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="person-circle-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Thông tin cá nhân"
                            onPress={() =>
                                navigation.navigate('PersonalInfomation')
                            }
                        />
                    </View>
                </View>
            </DrawerContentScrollView>

            <View style={styles.bottomDrawer}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="log-out-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Đăng xuất"
                    onPress={() => navigation.navigate('Logout')}
                />
            </View>
        </View>
    );
};

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    drawerContent: {},
    userInfoSection: {
        flexDirection: 'column',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
    },
    avatar: {
        paddingBottom: 10,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 0.4,
        borderColor: '#000',
    },
    email: {
        paddingVertical: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.GRAY_DARK,
    },

    bottomDrawer: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
});
