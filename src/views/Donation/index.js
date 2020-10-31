import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { StatusBarColor } from '../../components/StatusBarColor'
import { BodyText, CaptionText, H2Text } from '../../components/Texts'
import { BloodTypeButton, SolidButton } from '../../components/Buttons'
import { NormalInput } from '../../components/Inputs'
import { rgMask } from '../../utils/masks'
import { rgValidation } from '../../utils/validations'

import { styles } from './styles'

export const Donation = (props) => {

    const [rg, setRg] = useState('')
    const [activeType, setActiveType] = useState("AB")
    const [medicamento, setMedicamento] = useState('')
    const [cirugia, setCirugia] = useState('')
    const [doenca, setDoenca] = useState('')

    const [update, setUpdate] = useState(false)


    useEffect(() => {
        const uid = auth().currentUser.uid

        firestore()
            .collection('donations')
            .where('uid', '==', uid)
            .get()
            .then(data => {
                if (data.size > 0) {
                    setUpdate(true)

                    data.forEach(d => {
                        setRg(d.get('rg'))
                        setActiveType(d.get('bloodType'))
                        setMedicamento(d.get('medicamento'))
                        setDoenca(d.get('doenca'))
                        setCirugia(d.get('cirugia'))
                    })
                }
            })
    }, [])

    const handleDonation = () => {
        const uid = auth().currentUser.uid

        const [rgTest, rgErrors] = rgValidation(rg)

        if (rgTest) {
            if (update) {
                firestore()
                    .collection('donations')
                    .where('uid', '==', uid)
                    .get()
                    .then(data => {
                        data.forEach(d => {
                            d.ref.update({
                                rg,
                                medicamento,
                                cirugia,
                                doenca,
                                bloodType: activeType,
                                uid: uid,
                            })
                        })
                        props.navigation.navigate('DonationSuccess', { update })
                    })
            }
            else {
                firestore()
                    .collection('donations')
                    .add({
                        rg,
                        medicamento,
                        cirugia,
                        doenca,
                        bloodType: activeType,
                        uid: uid,
                    })
                    .then(_ => {
                        props.navigation.navigate('DonationSuccess')
                    })
                    .catch(_ => {
                        Alert.alert(
                            'Erro ao cadastrar',
                            'Não foi possivel cadastrar o seu desejo de ser doador'
                        );
                    })
            }
        }
        else {
            Alert.alert(
                'Erro ao cadastrar',
                `${rgErrors.toString().replace(/,/, '')}`
            );
        }
    }

    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <H2Text>histórico médico</H2Text>
                <BodyText style={styles.text}>preencha os dados abaixo para você {update ? `atualizar seu cadastro.` : `se tornar um doador de orgãos.`}</BodyText>

                <ScrollView style={styles.inputsContainer}>
                    <NormalInput
                        placeholder="RG"
                        containerStyle={styles.inputContainerStyle}
                        value={rg}
                        onChangeText={(text) => setRg(rgMask(text))}
                        selectTextOnFocus
                        maxLength={12}
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
                        value={medicamento}
                        onChangeText={(text) => setMedicamento(text)}
                        selectTextOnFocus
                        maxLength={150}
                    />
                    <NormalInput
                        placeholder="Você ja fez alguma cirurgia? Se sim, qual?"
                        containerStyle={styles.inputContainerStyle}
                        value={cirugia}
                        onChangeText={(text) => setCirugia(text)}
                        selectTextOnFocus
                        maxLength={150}
                    />
                    <NormalInput
                        placeholder="Você tem alguma doença? Se sim, qual?"
                        containerStyle={styles.inputContainerStyle}
                        value={doenca}
                        onChangeText={(text) => setDoenca(text)}
                        selectTextOnFocus
                        maxLength={150}
                    />
                </ScrollView>

                <SolidButton
                    title="finalizar"
                    color="Black"
                    style={styles.button}
                    onPress={() => handleDonation()}
                />
            </SafeAreaView>
        </>
    )
}