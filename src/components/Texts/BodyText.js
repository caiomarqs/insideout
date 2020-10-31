import React from 'react'
import { Text } from 'react-native'

import { Texts } from '../../styles/components'

export const BodyText = ({ style, color, ...props }) => {
    return (
        <Text
            style={{ ...Texts.BodyText, color: color, ...style}}
            {...props}
        >
            {props.children}
        </Text>
    )
}