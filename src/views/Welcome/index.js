import React, { useContext } from 'react'
import { Image, SafeAreaView } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SolidButton } from '../../components/Buttons'
import imgWelcome from '../../assets/img/img_welcome.png'

import { styles } from './styles'
import { UserContext, USER_ACTIONS } from '../../contexts/UserContext'

export const Welcome = (props) => {

    const { dispatch } = useContext(UserContext)

    const handleInciar = () => {
        dispatch({
            type: USER_ACTIONS.SET_USER_DATA,
            payload: { first: false }
        })
    }

    return (
        <>
            <StatusBarColor barStyle="ligth-content" backgroundColor="transparent" />
            <SafeAreaView style={styles.container}>
                <Image
                    source={imgWelcome}
                    style={styles.img}
                />
                <H2Text style={styles.title}>bem-vindo ao InsideOut</H2Text>
                <BodyText style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dictum nulla dictum eu nulla vulputate pulvinar et tristique.</BodyText>

                <SolidButton
                    title="iniciar"
                    style={styles.button}
                    onPress={() => handleInciar()}
                />
            </SafeAreaView>
        </>
    )
}