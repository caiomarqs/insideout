import React, { useContext, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, View, Dimensions, Alert } from 'react-native'

import { SolidButton } from '../../components/Buttons'
import { NormalInput, SecretInput } from '../../components/Inputs'
import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import {
  completeNameValidation,
  emailValidation,
  passValidation,
  telefoneValidation
} from '../../utils/validations'
import { phoneMask } from '../../utils/masks'
import { UserContext, USER_ACTIONS } from '../../contexts/UserContext'


import { styles } from './styles'

export const Register = (props) => {

  const { dispatch } = useContext(UserContext)

  const [scroll, setScroll] = useState(false)

  const [nome, setNome] = useState(() => phoneMask(''))
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  const scrollViewRef = useRef()

  const hadleScroll = () => {
    if (email !== '') {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  }

  const handleNext = () => {

    const [nameTest, nameErrors] = completeNameValidation(nome)
    const [emailTest, emailErros] = emailValidation(email)

    if (nameTest && emailTest) {
      scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width, y: 0, animated: true })
    }
    else {
      Alert.alert(
        "Cadastro Inválido",
        `${nameErrors.toString().replace(/,/, '')}${emailErros.toString().replace(/,/, '')}`
      )
    }
  }

  const handleCadastrar = () => {


    const [senhaTest, senhaErrors] = passValidation(senha)
    const [telefoneTest, telefoneErros] = telefoneValidation(telefone)

    if (senhaTest && telefoneTest) {
      dispatch({
        type: USER_ACTIONS.SET_USER_DATA,
        payload: { nome, email, telefone, senha, first: true }
      })
      props.navigation.navigate('Terms')
    }
    else {
      Alert.alert(
        "Cadastro Inválido",
        `${senhaErrors.toString().replace(/,/, '')}${telefoneErros.toString().replace(/,/, '')}`
      )
    }
  }

  return (
    <>
      <StatusBarColor barStyle="dark-content" />

      <SafeAreaView style={styles.container}>

        <H2Text>acessar sua conta</H2Text>
        <BodyText style={styles.text}>se você já possui uma conta, insira os dados abaixo para entrar.</BodyText>

        <ScrollView
          style={styles.scrollViewContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').width}
          scrollEnabled={scroll}
          ref={scrollViewRef}
        >
          <View style={styles.slide}>

            <NormalInput
              placeholder="Nome Completo"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />

            <NormalInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              onKeyPress={() => hadleScroll()}
              onSubmitEditing={() => handleNext()}
            />

            <View style={styles.space} />

            <SolidButton
              title="continuar"
              style={styles.button}
              color="Black"
              disabled={(email === '' || nome === '') ? true : false}
              onPress={() => handleNext()}
            />
          </View>
          <View style={styles.slide}>

            <NormalInput
              placeholder="Numero de Celular"
              value={telefone}
              maxLength={14}
              onChangeText={(text) => setTelefone(phoneMask(text))}
            />

            <SecretInput
              placeholder="Senha"
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />

            <View style={styles.space} />

            <SolidButton
              title="cadastrar"
              style={styles.button}
              color="Primary"
              onPress={() => handleCadastrar()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}