import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { ButtonsStyles } from '../../styles/components'
import { Colors, Fonts } from '../../styles/base'
import { ButtonText } from '../Texts'

export const BloodTypeButton = ({ title, active = false, style, onPress, ...props }) => {

    const handleColor = () => {
        if (active) {
            return { bg: Colors.Primary, text: Colors.White }
        }
        else {
            return { bg: Colors.WhiteGray, text: Colors.DrakGray }
        }
    }

    return (
        <TouchableOpacity activeOpacity={.6} style={{
            ...ButtonsStyles.bloodTypeButton,
            backgroundColor: handleColor().bg,
            ...style,
            elevation: active ? 12 : 0
        }}
            onPress={onPress}
            {...props}
        >
            <ButtonText style={{
                fontFamily: Fonts.TextMedium.fontFamily
            }}
                color={handleColor().text}
            >
                {title}
            </ButtonText>
        </TouchableOpacity>
    )
}