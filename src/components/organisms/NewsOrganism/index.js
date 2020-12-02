import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import TextOpacity from '_atoms/TextOpacity';
import TextBold from '_atoms/TextBold';
import CutomIcon from '_atoms/CustomIcon';
import { WHITE } from '_styles/colors';

const NewsOrganism = ({ news, onPress }) => {
    return (
        <TouchableOpacity style={styles.layoutContainer} onPress={onPress}>
            <View style={styles.content}>
                <TextBold text={news.text} numberOfLines={2} />
                <View style={styles.text}>
                    <Text>
                        Người đăng: <TextOpacity text={news.user} />
                    </Text>
                    <Text>
                        Thời gian: <TextOpacity text={news.created_at} />
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.icon}>
                <CutomIcon name="chevron-forward-outline" size={28} />
            </TouchableOpacity>
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
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
    text: {
        paddingVertical: 5,
    },
    content: {
        paddingVertical: 10,
        paddingRight: 20,
        paddingLeft: 10,
    },
    icon: {
        paddingRight: 10,
    },
});
export default NewsOrganism;
