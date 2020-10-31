import { StyleSheet } from 'react-native'
import { Fonts } from '../../styles/base'

export const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24
    },
    text: {
        marginTop: 16,
        textAlign: 'center'
    },
    textName: {
        marginTop: 32,
        textAlign: 'center',
        fontFamily: Fonts.TextBold.fontFamily
    },
    buttonsContainer: {
        paddingTop: 72
    },
    button: {
        marginTop: 56
    }
})