import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import { fire } from 'shared/firebase'
import './index.css'
import App from './App'
import storeFactory from './store'
import * as serviceWorker from './serviceWorker'

//fire();

ReactDOM.render(
    <Provider store={storeFactory}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
