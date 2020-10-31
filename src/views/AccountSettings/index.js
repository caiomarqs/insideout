import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { CloseButton, TransparentButton } from '../../components/Buttons'

import { styles } from './styles'

export const AccountSettings = (props) => {
    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>configurações de conta</H2Text>
                <BodyText style={styles.text}>aqui você pode alterar sua senha ou deletar sua conta caso nao deseja usar mais.</BodyText>
                <View style={styles.buttonsContainer}>
                    <TransparentButton
                        title="Alterar Senha"
                        onPress={() => props.navigation.navigate('ChangePassword')}
                    />
                    <TransparentButton
                        title="Excluir Conta"
                        style={styles.button}
                        onPress={() => props.navigation.navigate('DeleteAccount')}
                    />
                </View>

                <CloseButton navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}