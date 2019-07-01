import { createStore, applyMiddleware } from 'redux'
import reducers from './modules'

let console = window.console;

let initialState = {}

const logger = store => next => action => {
    let result;
    console.log("123");
    result = next(action);
    return result;
}

const storeFactory = createStore(reducers, initialState, applyMiddleware(logger));

export default storeFactory;