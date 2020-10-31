import React, { useState } from 'react'
import { SafeAreaView, View, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'

import { SolidButton, TransparentButton } from '../../components/Buttons'
import { H2Text, BodyText } from '../../components/Texts'
import { StatusBarColor } from '../../components/StatusBarColor'
import { NormalInput, SecretInput } from '../../components/Inputs'

import { styles } from './styles'

export const Login = (props) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  const handleLogin = () => {
    if (email !== '' && senha !== '') {
      auth()
        .signInWithEmailAndPassword(email, senha)
        .catch(error => {
          console.log(error)
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Erro ao fazer login', 'Email inválido');
          }

          if (error.code === 'auth/wrong-password') {
            Alert.alert('Erro ao fazer login',  'Senha incorreta');
          }
        })
    }
    else{
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
