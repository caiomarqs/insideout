import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../styles/base'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    img: {
        maxWidth: 281.74,
    },
    title: {
        color: Colors.White,
        fontFamily: Fonts.DisplayBold.fontFamily,
        maxWidth: 156,
        textAlign: 'center',
        marginTop: 40
    },
    text: {
        marginTop: 24,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 19,
        color: Colors.White
    },
    button: {
        position: 'absolute',
        maxWidth: 243,
        width: '100%',
        bottom: 40
    }
})