import React from 'react'
import { Image, SafeAreaView } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SolidButton } from '../../components/Buttons'
import imgWelcome from '../../assets/img/img_welcome.png'

import { styles } from './styles'

export const Welcome = (props) => {
    return (
        <>
            <StatusBarColor barStyle="ligth-content" />
            <SafeAreaView style={styles.container}>
                <Image
                    source={imgWelcome}
                    style={styles.img}
                />
                <H2Text style={styles.title}>bem-vindo ao InsideOut</H2Text>
                <BodyText style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dictum nulla dictum eu nulla vulputate pulvinar et tristique.</BodyText>

                <SolidButton
                    title="finalizar"
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Home')}
                />
            </SafeAreaView>
        </>
    )
}