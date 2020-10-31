import React, { createContext, useReducer } from 'react'

const USER_ACTIONS = {
    SET_USER_DATA: "SET_USER_DATA",
    CLEAR_DATA: "CLEAR_DATA"
}

const INITAL_STATE = {
    user: {
        first: false
    }
}


const reducer = (state, action) => {
    switch (action.type) {
        case USER_ACTIONS.SET_USER_DATA: {
            return { user: { ...state.user, ...action.payload } }
        }
        case USER_ACTIONS.CLEAR_DATA: {
            return INITAL_STATE
        }
        default:
            return state
    }
}



const UserContext = createContext()

const UserProvider = (props) => {

    const [userState, dispatch] = useReducer(reducer, INITAL_STATE)

    return (
        <UserContext.Provider value={{ userState, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}


export { UserContext, UserProvider, USER_ACTIONS }