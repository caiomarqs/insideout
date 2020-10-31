import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText } from '../../components/Texts'
import { SolidButton } from '../../components/Buttons'

import { styles } from './styles'

export const DonationSuccess = (props) => {
    return (
        <>
            <StatusBarColor barStyle="ligth-content" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>agora você é um doador de orgãos.</Text>
                <BodyText style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id proin id fermentum tempor.</BodyText>
                <SolidButton
                    title="finalizar"
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Home')}
                />
            </SafeAreaView>
        </>
    )
}