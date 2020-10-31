import React, { useRef, useState } from 'react'
import { SafeAreaView, ScrollView, Dimensions, View } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SolidButton, TransparentButton, CloseButton } from '../../components/Buttons'
import { Colors } from '../../styles/base'

import { styles } from './styles'

export const DeleteAccount = (props) => {

    const [scroll, setScroll] = useState(false)

    const scrollViewRef = useRef()


    const handleNext = () => {
        setScroll(true)
        scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width, y: 0, animated: true })
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
                            onPress={() => props.navigation.navigate('ChangePassword')}
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