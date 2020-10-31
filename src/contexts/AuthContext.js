import React, { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = (props) => {

    const [authState, setAuthState] = useState(false)

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }