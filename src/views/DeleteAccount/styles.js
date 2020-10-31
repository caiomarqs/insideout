import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        marginTop: 16,
        paddingHorizontal: 24
    },
    scrollViewContainer: {
        flex: 1,
        width: '100%',
    },
    slide: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 24,
        position: 'relative',
        alignItems: 'center'
    },
    slideConfrim: {
        paddingTop: 104
    },
    button: {
        width: '100%',
        maxWidth: 179,
        position: 'absolute',
        bottom: 40
    },
    transparentButton: {
        marginTop: 56
    },
})