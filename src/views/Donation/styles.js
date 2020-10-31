import { StyleSheet, Dimensions } from 'react-native'

import { Colors } from '../../styles/base'

const CONTAINER_WIDTH = Dimensions.get('screen').width - 48

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 32
    },
    text: {
        marginTop: 16,
        textAlign: 'center',
        paddingHorizontal: 24
    },
    inputsContainer: {
        flex: 1,
        width: '100%',
        marginTop: 56
    },
    inputContainerStyle: {
        paddingHorizontal: 24
    },
    button: {
        maxWidth: 243,
        width: '100%',
        marginVertical: 40
    },
    bloodTypeContainer: {
        paddingHorizontal: 24,
        alignItems: "center"
    },
    bloodTypeTitle: {
        color: Colors.Gray,
        alignSelf: "flex-start"
    },
    bloodTypeButtonsContainer: {
        marginTop: 16,
        marginBottom: 40,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    typeButton1: {
        width: CONTAINER_WIDTH * 0.35,
        marginRight: 24
    },
    typeButton2: {
        width: CONTAINER_WIDTH - (CONTAINER_WIDTH * 0.35) - 24
    },
    typeButton3: {
        marginTop: 16,
        width: CONTAINER_WIDTH - (CONTAINER_WIDTH * 0.35) - 24
    },
    typeButton4: {
        marginTop: 16,
        width: CONTAINER_WIDTH * 0.35,
        marginLeft: 24
    }
})