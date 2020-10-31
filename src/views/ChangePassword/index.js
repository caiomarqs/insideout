import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import { StatusBarColor } from '../../components/StatusBarColor'

export const ChangePassword = (props) => {
    return (
        <>
            <StatusBarColor barStyle="dark-content" />
            <SafeAreaView>
                <Text>ChangePassword</Text>
            </SafeAreaView>
        </>
    )
}