import { Fonts } from '../base/Fonts'

import { StyleSheet } from 'react-native'

export const Texts = StyleSheet.create({
    H1Text: {
        fontFamily: Fonts.DisplayBold.fontFamily,
        lineHeight: 57,
        fontSize: 48
    },
    H2Text: {
        fontFamily: Fonts.DisplaySemibold.fontFamily,
        lineHeight: 29,
        fontSize: 24
    },
    H3Text: {
        fontFamily: Fonts.TextSemibold.fontFamily,
        lineHeight: 20,
        fontSize: 17
    },
    BodyText: {
        fontFamily: Fonts.TextRegular.fontFamily,
        lineHeight: 14,
        fontSize: 12
    },
    CaptionText: {
        fontFamily: Fonts.TextMedium.fontFamily,
        lineHeight: 14,
        fontSize: 12
    },
    ButtonText: {
        fontFamily: Fonts.TextSemibold.fontFamily,
        lineHeight: 19,
        fontSize: 14
    },
    TransparentButtonText: {
        fontFamily: Fonts.TextMedium.fontFamily,
        lineHeight: 17,
        fontSize: 14
    }
})