import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

export const userReauthenticate = (pass) => {
    var user = auth().currentUser
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, pass);
    return user.reauthenticateWithCredential(cred);
}
