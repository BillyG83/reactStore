import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

// config copied from firebase API
const config = {
    apiKey: "AIzaSyAlZbACvRxA-YNAKfu_yegIyAsrA35RItg",
    authDomain: "store-demo-86514.firebaseapp.com",
    databaseURL: "https://store-demo-86514.firebaseio.com",
    projectId: "store-demo-86514",
    storageBucket: "store-demo-86514.appspot.com",
    messagingSenderId: "148817490741",
    appId: "1:148817490741:web:9f0b162bc13415365bd27c",
    measurementId: "G-98L8CHRK9C"
}

// app.js will call this function when it is mounted, it returns this user
// or if this user is new it also creates the user in the database
// then returns the same userRef
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    // get this user who signed in with Google 
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    // if they do not exist in the firestore lets make them a user
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            // set is the create method to add this user object
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('Error creating the user in firebase')
            console.log(error)
        }
    }

    // return userRef so it can be used in app.js
    return userRef
}

// innit firebase with config
firebase.initializeApp(config)

// exporting features of firebase to be used in app
export const auth = firebase.auth()
export const firestore = firebase.firestore()

// exporting the sign in with Google feature for app
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase