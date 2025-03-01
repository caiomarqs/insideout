import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeString = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    }
    catch (error) {
        console.error(error)
    }
}

export const storeData = async (key, value = {}) => {
    try {
        const jsonString = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonString)
    }
    catch (error) {
        console.error(error)
    }
}

export const getString = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    }
    catch (error) {
        console.error(error)
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue === null ? null : JSON.parse(jsonValue)
    }
    catch (error) {
        console.error(error)
    }
}