import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import TextOpacity from '_atoms/TextOpacity';
import TextBold from '_atoms/TextBold';
import CutomIcon from '_atoms/CustomIcon';
import {
    WHITE,
    PRIMARY,
    YELLOW,
    GREEN,
    GRAY_DARK,
    GRAY_LIGHT,
} from '_styles/colors';

const NewsOrganism = ({ data, onPress }) => {
    return (
        <TouchableOpacity style={styles.layoutContainer} onPress={onPress}>
            <View style={styles.content}>
                <TextBold text={data.text} numberOfLines={2} />
                <View style={styles.text}>
                    <Text>
                        <TextOpacity text={' Người đăng: '} />{' '}
                        <TextOpacity text={data.user} />
                    </Text>
                    <Text>
                        <TextOpacity text={' Thời gian: '} />{' '}
                        <TextOpacity text={data.created_at} />
                    </Text>
                </View>
            </View>
            <View style={styles.icon}>
                <CutomIcon
                    name="chevron-forward-outline"
                    size={28}
                    color={GRAY_DARK}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    layoutContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: GRAY_LIGHT,
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    text: {
        paddingTop: 10,
    },
    content: {
        paddingVertical: 10,
        paddingRight: 20,
        paddingLeft: 10,
    },
    icon: {
        paddingRight: 10,
    },
    textOrange: {
        color: PRIMARY,
    },
    textYellow: {
        color: YELLOW,
    },
    textGreen: {
        color: GREEN,
    },
});
export default NewsOrganism;
