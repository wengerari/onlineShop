import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyDT2LVE7IqWGyzzXINAYQ_RCsyfKj7hnZc",
    authDomain: "liniar.firebaseapp.com",
    databaseURL: "https://liniar.firebaseio.com",
    projectId: "liniar",
    storageBucket: "liniar.appspot.com",
    messagingSenderId: "238248751831",
    appId: "1:238248751831:web:3853c56c326f207616b692"
};


export const createUserProfileDocument = async(userAuth,additionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })

        } catch (error){
            console.log(error.message);
        }

    }
    return userRef;


}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;