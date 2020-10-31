import React from 'react'
import { ImageBackground, SafeAreaView } from 'react-native'

import { BodyText, H1Text } from '../../components/Texts'
import { SolidButton, TransparentButton } from '../../components/Buttons'
import { StatusBarColor } from '../../components/StatusBarColor'
import { Colors } from '../../styles/base/Colors'
import initalBg from '../../assets/img/initial_bg.png'

import { styles } from './styles'

export const Initial = (props) => {
  return (
    <>
      <StatusBarColor backgroundColor='transparent'/>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={initalBg}
          style={styles.bgContainer}
        >

          <H1Text color={Colors.White}>InsideOut</H1Text>
          <BodyText
            color={Colors.White}
            style={styles.text}
          >
            Seja um doador de orgãos agora mesmo e ajude a salvar vidas.
        </BodyText>


          <SafeAreaView style={styles.buttonsContainer}>
            <SolidButton
              title="acessar sua conta"
              color="White"
              style={styles.button}
              onPress={() => props.navigation.navigate('Login')}
            />
            <TransparentButton
              title="criar uma conta?"
              color={Colors.White}
              style={styles.button}
              onPress={() => props.navigation.navigate('Register')}
            />
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaView>
    </>
  )
}