import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View  } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, CaptionText, H2Text } from '../../components/Texts'
import { BloodTypeButton, SolidButton } from '../../components/Buttons'
import { NormalInput } from '../../components/Inputs'

import { styles } from './styles'

export const Donation = (props) => {

    const [activeType, setActiveType] = useState("AB")

    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>histórico médico</H2Text>
                <BodyText style={styles.text}>preencha os dados abaixo para você se tornar um doador de orgãos.</BodyText>

                <ScrollView style={styles.inputsContainer}>
                    <NormalInput
                        placeholder="RG"
                        containerStyle={styles.inputContainerStyle}
                    />

                    <View style={styles.bloodTypeContainer}>
                        <CaptionText style={styles.bloodTypeTitle}>Tipo Sanguíneo</CaptionText>
                        <View style={styles.bloodTypeButtonsContainer}>
                            <BloodTypeButton
                                title="AB"
                                style={styles.typeButton1}
                                active={activeType === "AB"}
                                onPress={() => setActiveType("AB")}
                            />
                            <BloodTypeButton
                                title="B"
                                style={styles.typeButton2}
                                active={activeType === "B"}
                                onPress={() => setActiveType("B")}
                            />
                            <BloodTypeButton
                                title="A"
                                style={styles.typeButton3}
                                active={activeType === "A"}
                                onPress={() => setActiveType("A")}
                            />
                            <BloodTypeButton
                                title="O"
                                style={styles.typeButton4}
                                active={activeType === "O"}
                                onPress={() => setActiveType("O")}
                            />
                        </View>
                    </View>

                    <NormalInput
                        placeholder="Você toma algum medicamento? Se sim, qual?"
                        containerStyle={styles.inputContainerStyle}
                    />
                    <NormalInput
                        placeholder="Você ja fez alguma cirurgia? Se sim, qual?"
                        containerStyle={styles.inputContainerStyle}
                    />
                    <NormalInput
                        placeholder="Você tem alguma doença? Se sim, qual?"
                        containerStyle={styles.inputContainerStyle}
                    />
                </ScrollView>

                <SolidButton
                    title="finalizar"
                    color="Black"
                    style={styles.button}
                    onPress={() => props.navigation.navigate('DonationSuccess')}
                />
            </SafeAreaView>
        </>
    )
}