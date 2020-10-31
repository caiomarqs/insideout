import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../styles/base'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    title: {
        color: Colors.White,
        fontFamily: Fonts.DisplayBold.fontFamily,
        fontSize: 64,
        lineHeight: 76,
        textAlign: 'center'
    },
    text: {
        color: Colors.White,
        textAlign: "center",
        marginTop: 46
    },
    button: {
        position: 'absolute',
        bottom: 40,
        maxWidth: 243,
        width: '100%'
    }
})