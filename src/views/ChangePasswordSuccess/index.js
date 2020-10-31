import React from 'react'
import { Image, SafeAreaView } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SolidButton } from '../../components/Buttons'
import imgChangePass from '../../assets/img/img_changepass.png'

import { styles } from './styles'

export const ChangePasswordSuccess = (props) => {
    return (
        <>
            <StatusBarColor barStyle="ligth-content" />
            <SafeAreaView style={styles.container}>
                <Image source={imgChangePass} />
                <H2Text style={styles.title}>sua senha foi alterada com sucesso</H2Text>
                <BodyText style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dictum nulla dictum eu nulla vulputate pulvinar et tristique.</BodyText>
                <SolidButton
                    title="finalizar"
                    color="White"
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Home')}
                />
            </SafeAreaView>
        </>
    )
}