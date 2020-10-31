import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SecretInput } from '../../components/Inputs'
import { SolidButton } from '../../components/Buttons'

import { styles } from './styles'

export const ChangePassword = (props) => {

    const [newPass, setNewPass] = useState('')


    const handleChagePass = () => {
        props.navigation.navigate('ChangePasswordSuccess')
    }

    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>alteração de senha</H2Text>
                <BodyText style={styles.text}>caso realmente deseje mudar sua senha, informe abaixo a nova senha.</BodyText>

                <SecretInput
                    placeholder="Nova Senha"
                    value={newPass}
                    onChangeText={(text) => setNewPass(text)}
                    style={styles.input}
                />
                <SolidButton
                    title="alterar"
                    color="Black"
                    style={styles.button}
                    onPress={() => handleChagePass()}
                />
            </SafeAreaView>
        </>
    )
}