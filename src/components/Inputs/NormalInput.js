import React from 'react'
import { Input } from 'react-native-elements';

import { InputsStyles } from '../../styles/components';

export const NormalInput = ({ value, placeholder, onChangeText, containerStyle, ...props }) => {
    return (
        <Input
            placeholder={placeholder}
            inputStyle={InputsStyles.normalInputContainer}
            onChangeText={onChangeText}
            containerStyle={{ paddingHorizontal: 0, ...containerStyle }}
            {...props}
        />
    )
}