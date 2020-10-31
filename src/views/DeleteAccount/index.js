import React, { useEffect, useRef, useState, useContext } from 'react'
import { SafeAreaView, ScrollView, Dimensions, View } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SolidButton, TransparentButton, CloseButton } from '../../components/Buttons'
import { userReauthenticate } from '../../services/firebase.service'
import { getString, storeString } from '../../utils/asyncStorage'
import { UserContext, USER_ACTIONS } from '../../contexts/UserContext'
import { Colors } from '../../styles/base'

import { styles } from './styles'

export const DeleteAccount = (props) => {

    const { userState, dispatch } = useContext(UserContext)

    const [scroll, setScroll] = useState(false)
    const [userPass, setUserPass] = useState('')

    const scrollViewRef = useRef()

    useEffect(() => {
        getString('userPass').then((data) => {
            setUserPass(data)
        })
    }, [])

    const handleNext = () => {
        setScroll(true)
        scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width, y: 0, animated: true })
    }

    const hadleDelete = () => {
        userReauthenticate(userPass).then(_ => {
            firestore()
                .collection('users')
                .where('uid', '==', auth().currentUser.uid)
                .get()
                .then(data => {
                    data.forEach(d => {
                        d.ref.delete()
                    })

                    auth().currentUser.delete().then(_ => {
                        dispatch({ type: USER_ACTIONS.CLEAR_DATA })
                        storeString('userPass', '')
                    })
                })
        })

    }

    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>excluir conta</H2Text>
                <BodyText style={styles.text}>se você realmente deseja excluir sua conta, todo os seus dados serão perdidos para sempre, deseja continuar?</BodyText>
                <ScrollView
                    style={styles.scrollViewContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={Dimensions.get('window').width}
                    scrollEnabled={scroll}
                    ref={scrollViewRef}
                >
                    <View style={styles.slide}>
                        <SolidButton
                            title="continuar"
                            color="Black"
                            style={styles.button}
                            onPress={() => handleNext()}
                        />
                    </View>
                    <View style={[styles.slide, styles.slideConfrim]}>
                        <TransparentButton
                            title="Sim"
                            onPress={() => hadleDelete()}
                            color={Colors.Primary}
                        />
                        <TransparentButton
                            title="Não"
                            style={styles.transparentButton}
                            onPress={() => props.navigation.pop()}
                        />
                        <CloseButton navigation={props.navigation} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}