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
        textAlign: 'center',
        fontFamily: Fonts.DisplayBold.fontFamily,
        marginTop: 66
    },
    text: {
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        color: Colors.White,
        marginTop: 24
    },
    button: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        maxWidth: 243,
    }
})