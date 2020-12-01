import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import avatar from '_assets/images/avatar.jpg';
import { Colors } from '_styles';
import CustomIcon from '_atoms/CustomIcon';

const NotificationBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.svgBackground}>
                <Svg
                    width="288"
                    height="51"
                    viewBox="0 0 288 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M269.242 52.6853C269.242 52.6853 120.791 68.5923 -49.9582 5L-44.9163 59.4465L224.038 92.3044L269.242 52.6853Z"
                        fill="#C74900"
                    />
                    <Path
                        d="M-2.95704 57.7405C129.076 -6.53396 285.266 92.5091 285.266 92.5091L-2.95704 57.7405Z"
                        fill="#FFC700"
                    />
                </Svg>
            </View>

            <View style={styles.main}>
                <View style={styles.infoSection}>
                    <View>
                        <Image source={avatar} style={styles.avatar} />
                    </View>
                    <Text style={styles.name}>Xin chào, Nguyễn Hồng Quân</Text>
                </View>

                <TouchableOpacity style={styles.icon} onPress={() => {}}>
                    <CustomIcon
                        color="#FFF"
                        name="notifications-outline"
                        size={24}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NotificationBar;

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.PRIMARY,
    },

    main: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginHorizontal: 15,
    },
    svgBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    infoSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 200,
        resizeMode: 'contain',
    },
    name: {
        fontWeight: 'bold',
        color: Colors.WHITE,
        marginHorizontal: 10,
    },
    iconSection: {},
});
