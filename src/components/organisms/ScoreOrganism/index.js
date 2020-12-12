import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import TextColor from '_atoms/TextColor';
import TextBold from '_atoms/TextBold';
import CutomIcon from '_atoms/CustomIcon';
import { WHITE, YELLOW, PRIMARY, GRAY_DARK } from '_styles/colors';

const ScoreOrganism = ({ data, onPress }) => {
    return (
        <TouchableOpacity style={styles.layoutContainer} onPress={onPress}>
            <View style={styles.content}>
                <TextBold text={data.text} numberOfLines={2} />
                <View style={styles.text}>
                    <Text>
                        Điểm trung bình:{' '}
                        <TextColor content={data.score} color="#FF0000" />
                    </Text>
                    <Text>
                        Trạng thái:{' '}
                        <TextColor content={data.status} color={YELLOW} />
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
});
export default ScoreOrganism;
