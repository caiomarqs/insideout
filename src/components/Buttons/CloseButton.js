import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ButtonsStyles } from '../../styles/components'

import { CloseIcon } from '../Icons'


export const CloseButton = ({ navigation, ...props }) => {
    return (
        <TouchableOpacity
            activeOpacity={.6}
            onPress={() => navigation.pop()}
            style={ButtonsStyles.closeButton}
        >
            <CloseIcon />
        </TouchableOpacity>
    )
}
