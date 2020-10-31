import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonsStyles } from '../../styles/components'
import { Colors } from '../../styles/base'

import { ButtonText } from '../Texts'

export const SolidButton = ({ onPress = () => { }, color = "White" || "Black" || "Primary", title, style, disabled = false, ...props }) => {

    const handleColor = () => {

        if (disabled === false) {
            if (color === "Primary")
                return { bg: Colors.Primary, text: Colors.White }
            else if (color === "White")
                return { bg: Colors.White, text: Colors.Black }
            else if (color === "Black")
                return { bg: Colors.Black, text: Colors.White }
            else
                return { bg: Colors.White, text: Colors.Black }
        }
        else {
            if (color === "Primary")
                return { bg: Colors.PrimaryDisabled, text: Colors.WhiteDisabled }
            else if (color === "White")
                return { bg: Colors.WhiteDisabled, text: Colors.BlackDisabled }
            else if (color === "Black")
                return { bg: Colors.BlackDisabled, text: Colors.WhiteDisabled }
            else
                return { bg: Colors.WhiteDisabled, text: Colors.BlackDisabled }
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={.7}
            onPress={onPress}
            style={{
                ...ButtonsStyles.solidButton,
                backgroundColor: handleColor().bg,
                ...style,
            }}
            disabled={disabled}
        >
            <ButtonText
                color={handleColor().text}
                style={{ marginBottom: 2 }}
            >
                {title}
            </ButtonText>
        </TouchableOpacity>
    )
}