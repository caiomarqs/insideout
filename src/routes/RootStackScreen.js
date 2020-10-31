import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { AuthContext } from '../contexts/AuthContext'
import { UserContext, USER_ACTIONS } from '../contexts/UserContext'

import { Initial } from '../views/Initial'
import { Login } from '../views/Login'
import { Register } from '../views/Register'
import { Home } from '../views/Home'
import { Donation } from '../views/Donation'
import { DonationSuccess } from '../views/DonationSuccess'
import { Terms } from '../views/Terms'
import { Welcome } from '../views/Welcome'
import { AccountSettings } from '../views/AccountSettings'
import { DeleteAccount } from '../views/DeleteAccount'
import { ChangePassword } from '../views/ChangePassword'
import { ChangePasswordSuccess } from '../views/ChangePasswordSuccess'
import { Colors } from '../styles/base';

import { getString } from '../utils/asyncStorage'

const Stack = createStackNavigator();

export const RootStackScreen = () => {

    const { authState, setAuthState } = useContext(AuthContext)
    const { userState, dispatch } = useContext(UserContext)

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (!authState) {
                setAuthState(user)

                if (user) {
                    firestore()
                        .collection('users')
                        .where('uid', '==', user.uid)
                        .get()
                        .then(data => {
                            data.forEach(d => {
                                dispatch({
                                    type: USER_ACTIONS.SET_USER_DATA,
                                    payload: { ...d.data() }
                                })
                            })
                        })
                }
            }
        })
    }, [authState])


    if (!authState) {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: Colors.White
                }
            }}>

                <Stack.Screen name="Initial" component={Initial} options={{ cardStyle: { backgroundColor: Colors.Primary } }} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Terms" component={Terms} />
            </Stack.Navigator>
        )
    }
    else {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: Colors.White
                }
            }}>
                {
                    userState.user.first
                    &&
                    <Stack.Screen name="Welcome" component={Welcome} options={{ cardStyle: { backgroundColor: Colors.Primary } }} />
                }
                <Stack.Screen name="Home" component={Home} options={{ cardStyle: { backgroundColor: Colors.Primary } }} />
                <Stack.Screen name="Donation" component={Donation} />
                <Stack.Screen name="DonationSuccess" component={DonationSuccess} options={{ cardStyle: { backgroundColor: Colors.Primary } }} />
                <Stack.Screen name="AccountSettings" component={AccountSettings} />
                <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
                <Stack.Screen name="ChangePasswordSuccess" component={ChangePasswordSuccess} options={{ cardStyle: { backgroundColor: Colors.Primary } }} />
            </Stack.Navigator>
        )
    }
}