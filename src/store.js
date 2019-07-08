import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './modules'

let console = window.console;

let initialState = {}

const logger = createLogger();

const composeMiddleWare = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ) :
    applyMiddleware(thunk, logger);

const storeFactory = createStore(reducers
    , initialState
    , composeMiddleWare);

console.log(storeFactory.getState());

export default storeFactory;