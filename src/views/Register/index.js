import React, { useRef, useState } from 'react'
import { SafeAreaView, ScrollView, View, Dimensions, StyleSheet } from 'react-native'

import { SolidButton } from '../../components/Buttons'
import { NormalInput, SecretInput } from '../../components/Inputs'
import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'

import { styles } from './styles'

export const Register = (props) => {

  const [scroll, setScroll] = useState(false)

  const [nome, setNome] = useState('')
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
    if (email !== '') {
      scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width, y: 0, animated: true })
    }
  }

  const handleCadastrar = () => {
    props.navigation.navigate('Terms')
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
              disabled={email === '' ? true : false}
              onPress={() => handleNext()}
            />
          </View>
          <View style={styles.slide}>

            <NormalInput
              placeholder="Numero de Celular"
              value={telefone}
              onChangeText={(text) => setTelefone(text)}
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