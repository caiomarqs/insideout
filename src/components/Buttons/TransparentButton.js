import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { ButtonsStyles, Texts } from '../../styles/components'


export const TransparentButton = ({ onPress = () => { }, color, title, style, ...props }) => {

    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={onPress}
            style={{ ...ButtonsStyles.transparentButton, ...style }}
        >
            <Text
                style={{ ...Texts.TransparentButtonText, marginBottom: 2, color: color }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}