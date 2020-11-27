
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import TextBold from '_atoms/TextBold';
import Paragraph from '_atoms/Paragraph';

const Highlight = ({...inputProps})=>{

    const notePassword = '- Để lấy mật khẩu truy cập phụ huynh soạn tin nhắn theo cú pháp ';
    const textNote = ' gửi về đầu số ';
    const textSms = 'POLY MK';
    const textNumber = '8100';

    return(
        <View {...inputProps}>
            <Text style={styles.paragraph}>
                {notePassword}
                <TextBold text={textSms}/> {textNote}
                <TextBold text={textNumber} />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph : {
        fontSize: 13,
        lineHeight: 15,
        textAlign: 'center',
        paddingBottom: 16,
    }
})

export default Highlight;

