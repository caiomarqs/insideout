import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootStackScreen } from './routes/RootStackScreen'
import { AuthProvider } from './contexts/AuthContext'
import { UserProvider } from './contexts/UserContext'


export default App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <RootStackScreen />
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}