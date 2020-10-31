import { StyleSheet } from 'react-native'

import { Colors } from '../../styles/base/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Primary
    },
    bgContainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    text: {
        maxWidth: 296,
        textAlign: "center",
        marginTop: 8
    },
    separator: {
        flex: 1
    },
    buttonsContainer: {
        flex: 1,
        top: 0,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        width: '100%',
    },
    button:{
        marginBottom: 24
    }
})