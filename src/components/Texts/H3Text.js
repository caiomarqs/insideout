import React from 'react'
import { Text } from 'react-native'

import { Texts } from '../../styles/components'

export const H3Text = ({ style, color, ...props }) => {
    return (
        <Text
            style={{ ...Texts.H3Text, color: color, ...style}}
            {...props}
        >
            {props.children}
        </Text>
    )
}