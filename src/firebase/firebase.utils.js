import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjbIRDW4rGnPmyl49DLlLMmDQgkhv7sRM",
    authDomain: "crwn-db-98d38.firebaseapp.com",
    databaseURL: "https://crwn-db-98d38.firebaseio.com",
    projectId: "crwn-db-98d38",
    storageBucket: "crwn-db-98d38.appspot.com",
    messagingSenderId: "446878075050",
    appId: "1:446878075050:web:a644570836f177dd5fe8d3",
    measurementId: "G-K7177ZVCNG"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;