import React, { useContext } from 'react'
import { SafeAreaView, View } from 'react-native'
import auth from '@react-native-firebase/auth'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { CloseButton, TransparentButton } from '../../components/Buttons'
import { UserContext, USER_ACTIONS } from '../../contexts/UserContext'
import { storeString } from '../../utils/asyncStorage'

import { styles } from './styles'

export const AccountSettings = (props) => {

    const { userState, dispatch } = useContext(UserContext)


    const handleLogOut = () => {
        auth().signOut()
        dispatch({ type: USER_ACTIONS.CLEAR_DATA })
        storeString('userPass', '')
    }

    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>configurações de conta</H2Text>
                <BodyText style={styles.text}>aqui você pode alterar sua senha ou deletar sua conta caso nao deseja usar mais.</BodyText>
                <BodyText style={styles.textName}>Olá, {userState.user.nome}</BodyText>
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
                    <TransparentButton
                        title="Sair"
                        style={styles.button}
                        onPress={() => handleLogOut()}
                    />
                </View>

                <CloseButton navigation={props.navigation} />
            </SafeAreaView>
        </>
    )
}