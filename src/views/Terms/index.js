import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, H2Text } from '../../components/Texts'
import { SolidButton } from '../../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler'

import { styles } from './styles'

export const Terms = (props) => {
    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>termos e condições</H2Text>

                <ScrollView style={styles.termsTextsContainer}>
                    <BodyText style={styles.termsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst condimentum et tellus consequat in facilisis. Quam adipiscing molestie ullamcorper dictum ac. Sit lorem amet, vehicula pulvinar nulla quis. Proin volutpat ipsum amet in porta montes. Sed auctor purus gravida habitant diam euismod. Pellentesque pretium sed tellus lorem mi quam ullamcorper mi. Consectetur aenean eu at cras urna, lobortis lorem.</BodyText>
                    <BodyText style={styles.termsText}>Iaculis nunc duis aliquet diam adipiscing habitant urna amet. Quis lacinia sit cras erat condimentum. Eu porttitor neque, commodo varius morbi faucibus. Condimentum imperdiet tellus elit velit donec dolor urna. Lectus viverra dui aliquam tortor lectus urna adipiscing semper. Iaculis sit suscipit et urna aliquet semper. Semper amet donec ultrices dolor. Eu ut egestas tincidunt in lacus pharetra, ultrices odio ornare. Duis eu diam ornare sit neque. Vel id auctor turpis risus integer. Diam nisl lectus commodo enim cursus nec dictum. Elementum, dictumst arcu arcu dis diam. Rutrum sem erat in metus tellus.</BodyText>
                    <BodyText style={styles.termsText}>Et tempor nec quam tortor nibh dignissim auctor. Aenean nunc pellentesque vel nunc pharetra semper dictum morbi semper. Quam non libero imperdiet sit. Eget massa sagittis non sem. Id sagittis purus, tempus, lobortis sit.</BodyText>
                </ScrollView>
                <SolidButton
                    title="aceitar"
                    color="Black"
                    style={styles.button}
                    onPress={() => props.navigation.navigate('Welcome')}
                />
            </SafeAreaView>
        </>
    )
}