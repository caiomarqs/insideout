import React from 'react'
import { Input } from 'react-native-elements';

import { InputsStyles } from '../../styles/components';

export const NormalInput = ({ value, placeholder, onChangeText, containerStyle, maxLength, ...props }) => {
    return (
        <Input
            placeholder={placeholder}
            inputStyle={InputsStyles.normalInputContainer}
            onChangeText={onChangeText}
            containerStyle={{ paddingHorizontal: 0, ...containerStyle }}
            maxLength={maxLength}
            value={value}
            {...props}
        />
    )
}