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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;