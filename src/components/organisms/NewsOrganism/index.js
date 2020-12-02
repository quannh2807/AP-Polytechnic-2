import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import TextOpacity from '_atoms/TextOpacity';
import TextBold from '_atoms/TextBold';
import CutomIcon from '_atoms/CutomIcon';
import { WHITE } from '_styles/colors';

const NewsOrganism = ({ news, onPress }) => {
    return (
        <View style={styles.layoutContainer}>
            <View style={styles.flexBoxLarge}>
                <TextBold {...news} numberOfLines={2} />
                <View style={styles.boxOpacity}>
                    <View style={styles.text}>
                        <TextOpacity {...news} />
                    </View>
                    <View style={styles.text}>
                        <TextOpacity {...news} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.flexBoxMin}
                onPress={onPress}
            >
                <CutomIcon name="chevron-forward-outline" size={28} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    layoutContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 8,
        marginVertical: 5,
    },
    boxOpacity: {
        marginTop: 5
    },
    text: {
        paddingVertical: 5
    },
    flexBoxLarge: {
        flex: 7,
        padding: 10
    },
    flexBoxMin: {
        flex: 1,
        alignItems: 'center',
    }
})
export default NewsOrganism;