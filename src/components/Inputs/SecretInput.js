import React, { useState } from 'react'
import { Input } from 'react-native-elements';

import { InputsStyles } from '../../styles/components';

export const SecretInput = ({ value = '', placeholder, onChangeText = () => { }, ...props }) => {

    const [securety, setSecurety] = useState(false)

    return (
        <Input
            placeholder={placeholder}
            inputStyle={InputsStyles.normalInputContainer}
            secureTextEntry={securety}
            onChangeText={(text) => {
                onChangeText(text)
                if(securety === false){
                    setSecurety(true)
                }  
            }}
            secureTextEntry={(securety && value !== '') ? true : false}
            containerStyle={{ paddingHorizontal: 0 }}
            {...props}
        />
    )
}