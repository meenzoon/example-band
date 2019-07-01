import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase'

import './index.css'
import App from './App'
import storeFactory from './store'
import * as serviceWorker from './serviceWorker'

const firebaseConfig = {
    apiKey: "AIzaSyDTLez_xPoME3KerHp8qoUU-IChy5A4fXI",
    authDomain: "meenzoon-33eec.firebaseapp.com",
    databaseURL: "https://meenzoon-33eec.firebaseio.com",
    projectId: "meenzoon-33eec",
    storageBucket: "meenzoon-33eec.appspot.com",
    messagingSenderId: "779698622118",
    appId: "1:779698622118:web:f1b64cafffb2292b"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Provider store={storeFactory}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
