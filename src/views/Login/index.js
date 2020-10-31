import React, { useContext, useState } from 'react'
import { SafeAreaView, View, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import { SolidButton, TransparentButton } from '../../components/Buttons'
import { H2Text, BodyText } from '../../components/Texts'
import { StatusBarColor } from '../../components/StatusBarColor'
import { NormalInput, SecretInput } from '../../components/Inputs'
import { storeString } from '../../utils/asyncStorage'

import { styles } from './styles'


export const Login = (props) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const handleLogin = () => {
    if (email !== '' && senha !== '') {
      auth()
        .signInWithEmailAndPassword(email, senha)
        .then(() => {
          storeString('userPass', senha)
        })
        .catch(error => {
          if (error.code === 'auth/too-many-requests') {
            Alert.alert('Erro ao fazer login', 'Diversas tentativas erradas, o usuario foi bloqueado por algum tempo!');
          }

          if (error.code === 'auth/user-not-found') {
            Alert.alert('Erro ao fazer login', 'Email não cadastrado, cadastre-se!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('Erro ao fazer login', 'Email inválido');
          }

          if (error.code === 'auth/wrong-password') {
            Alert.alert('Erro ao fazer login', 'Senha incorreta');
          }
        })
    }
    else {
      Alert.alert('Erro ao fazer login', 'Preencha todos os campos');
    }

  }

  return (
    <>
      <StatusBarColor barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <H2Text>acessar sua conta</H2Text>
        <BodyText style={styles.text}>se você já possui uma conta, insira os dados abaixo para entrar.</BodyText>
        <View style={styles.inpustContainer}>
          <NormalInput
            value={email}
            placeholder="Email"
            onChangeText={(text) =>
              setEmail(text)}
          />
          <SecretInput
            value={senha}
            placeholder="Senha"
            onChangeText={(text) => setSenha(text)}
          />
        </View>
        <View style={styles.space} />
        <View>
          <SolidButton
            title="acessar sua conta"
            color="Primary"
            style={styles.button}
            onPress={() => handleLogin()}
          />
          <TransparentButton
            title="criar uma nova conta"
            style={styles.button}
            onPress={() => props.navigation.navigate('Register')}
          />
        </View>
      </SafeAreaView>
    </>
  )
}
