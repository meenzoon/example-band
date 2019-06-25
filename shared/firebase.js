import * as firebase from 'firebase'
let database;
const firebaseConfig = {
    apiKey: "AIzaSyDTLez_xPoME3KerHp8qoUU-IChy5A4fXI",
    authDomain: "meenzoon-33eec.firebaseapp.com",
    databaseURL: "https://meenzoon-33eec.firebaseio.com",
    projectId: "meenzoon-33eec",
    storageBucket: "meenzoon-33eec.appspot.com",
    messagingSenderId: "779698622118",
    appId: "1:779698622118:web:f1b64cafffb2292b"
};

export const fire = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
}