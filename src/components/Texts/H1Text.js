import React from 'react'
import { Text } from 'react-native'

import { Texts } from '../../styles/components'

export const H1Text = ({ style, color, ...props }) => {
    return (
        <Text
            style={{ ...Texts.H1Text, ...style, color: color }}
            {...props}
        >
            {props.children}
        </Text>
    )
}