import React from 'react'
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text, H3Text } from '../../components/Texts'
import { OptionsIcon } from '../../components/Icons'
import imgCard from '../../assets/img/img_card.png'

import { styles } from './styles'

export const Home = (props) => {
  return (
    <>
      <StatusBarColor barStyle="ligth-content" backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <H2Text style={styles.title}>InsideOut</H2Text>
          <TouchableOpacity
            activeOpacity={.6}
            onPress={() => props.navigation.navigate('AccountSettings')}
          >
            <OptionsIcon />
          </TouchableOpacity>
        </View>
        <BodyText style={styles.text}>Ajude-nos a salvar cada dia mais vidas, virando um doador de orgãos de forma rapida e simples.</BodyText>

        <View style={styles.whiteCard}>
          <H3Text>Alerta de COVID-19</H3Text>
          <BodyText style={styles.whiteCardText}>Use mascaras e passe sempre alcool em gel quando entrar em contato com alguma superfice ou outras pessoas.</BodyText>
        </View>

        <TouchableOpacity
          style={styles.touchCard}
          activeOpacity={.6}
          onPress={() => props.navigation.navigate('Donation')}
        >
          <ImageBackground
            style={styles.imgCard}
            source={imgCard}
          >
            <View style={styles.touchCardContainer}>
              <Text style={styles.touchCardTitle}>seja um doador de orgão.</Text>
              <BodyText style={styles.touchCardText}>Ajude as pessoas se tornando uma doador de orgãos, clique no card para dar inicio a este processo e salvar milhoes de vidas.</BodyText>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </SafeAreaView >
    </>

  )
}