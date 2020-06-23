import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
        apiKey: "AIzaSyAvPwNNoj-ovgO3q1TSXlXGP_sq_dyW5Cw",
        authDomain: "cloth-spot-db.firebaseapp.com",
        databaseURL: "https://cloth-spot-db.firebaseio.com",
        projectId: "cloth-spot-db",
        storageBucket: "cloth-spot-db.appspot.com",
        messagingSenderId: "766867983761",
        appId: "1:766867983761:web:91ffa4f5e6c06cf17a9e30",
        measurementId: "G-Z87DDY6M09"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account "});
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;