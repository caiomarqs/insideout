import React from 'react'
import { Text } from 'react-native'

import { Texts } from '../../styles/components'

export const CaptionText = ({ style, color, ...props }) => {
    return (
        <Text
            style={{ ...Texts.CaptionText, color: color, ...style}}
            {...props}
        >
            {props.children}
        </Text>
    )
}