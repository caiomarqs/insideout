import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SecretInput } from '../../components/Inputs'
import { SolidButton } from '../../components/Buttons'
import { passValidation } from '../../utils/validations'
import { getString, storeString } from '../../utils/asyncStorage'
import { userReauthenticate } from '../../services/firebase.service'

import { styles } from './styles'


export const ChangePassword = (props) => {

    const [newPass, setNewPass] = useState('')
    const [oldPass, setOldPass] = useState('')

    useEffect(() => {
        getString('userPass').then((data) => {
            setOldPass(data)
        })
    }, [])

    const handleChagePass = () => {
        const [passTest, passErrors] = passValidation(newPass)

        if (passTest) {
            if (newPass === oldPass) {
                Alert.alert(
                    'Erro ao atulizar a senha',
                    'Insira uma senha diferente da antiga'
                )
                return
            }

            userReauthenticate(oldPass).then(() => {
                auth().currentUser
                    .updatePassword(newPass).then(() => {
                        storeString('userPass', newPass)
                        props.navigation.navigate('ChangePasswordSuccess')
                    })
                    .catch(error => {
                        console.log(error)
                        Alert.alert(
                            'Erro ao atulizar a senha',
                            'Não foi possivel alterar a senha no servidor.'
                        )
                    })
            })
        }
        else {
            Alert.alert(
                'Erro ao atulizar a senha',
                `${passErrors.toString().replace(/,/, '')}`
            )
        }

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