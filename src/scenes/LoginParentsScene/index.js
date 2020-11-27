import React from 'react';
import { View, StyleSheet} from 'react-native';
import LoginParentsOrganisms from '_organisms/LoginParentsOrganisms';

const DangNhap = () => {

    return (
        <View style={styles.container}>
            <LoginParentsOrganisms />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default DangNhap;