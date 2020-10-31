import { StyleSheet } from "react-native"

export const ButtonsStyles = StyleSheet.create({
    solidButton: {
        paddingHorizontal: 12,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 16,
        minWidth: 179
    },
    transparentButton: {
        paddingHorizontal: 12,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        minWidth: 179
    },
    bloodTypeButton: {
        height: 32, 
        borderRadius: 12,
        alignItems: "center",
        justifyContent: 'center',
    },
    closeButton:{
        position: 'absolute',
        bottom: 40
    }
})
