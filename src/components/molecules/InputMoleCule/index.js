import React from 'react';

import { View,StyleSheet } from 'react-native';
import Input from '_atoms/Input';

const InputMolecule = ({...inputProps})=>{

    return(
        <View style={styles.container}>
            <Input {...inputProps} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
    }
})
export default InputMolecule;