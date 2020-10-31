import { StyleSheet } from "react-native"

import { Colors, Fonts } from '../base'

export const InputsStyles = StyleSheet.create({
    normalInputContainer: {
        width: '100%',
        height: 32,
        fontSize: 12,
        fontFamily: Fonts.TextMedium.fontFamily,
        borderBottomColor: Colors.Gray,
    }
})
