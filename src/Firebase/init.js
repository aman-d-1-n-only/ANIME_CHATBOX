//install the firebase [npm install firebase --save] to intialize the app below and then import
import firebase from 'firebase'
//import firestore from firebase and exporting it below to use it in other vue component 
import firestore from 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8XNfWggo1CHYmQrK2KMKKHFhC7Tpw23w",
    authDomain: "anime-chatbox-b0136.firebaseapp.com",
    databaseURL: "https://anime-chatbox-b0136.firebaseio.com",
    projectId: "anime-chatbox-b0136",
    storageBucket: "anime-chatbox-b0136.appspot.com",
    messagingSenderId: "590765323701",
    appId: "1:590765323701:web:b2430a23d464e2551dd5fc",
    measurementId: "G-2Y35WGVG57"
};
// Initialize Firebase and storing this instance in a const
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

//exporting firestore database stored in firbaseApp instance
export default firebaseApp.firestore()