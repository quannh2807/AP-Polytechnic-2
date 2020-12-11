import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import { Colors, Typography } from '_styles';
import CustomIcon from '_atoms/CustomIcon';

const GoBackHeader = ({ route, titleContent }) => {
    const navigation = useNavigation();
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
                <TouchableOpacity
                    style={styles.goBackIcon}
                    onPress={() => navigation.navigate(route)}
                >
                    <CustomIcon
                        name="chevron-back-outline"
                        color={Colors.WHITE}
                        size={34}
                    />
                </TouchableOpacity>

                <View style={styles.title}>
                    <Text style={[styles.titleContent, Typography.FONT_BOLD]}>
                        {titleContent}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default GoBackHeader;

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.PRIMARY,
    },

    svgBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },

    main: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    goBackIcon: {
        flex: 1,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 6,
    },
    titleContent: {
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_16,
        textTransform: 'none',
    },
});
