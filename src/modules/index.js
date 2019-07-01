import { combineReducers } from 'redux'
import authReducer from './auth/auth'
import contentsReducer from './contents/contents'

const reducers = combineReducers({
    authReducer,
    contentsReducer
});

export default reducers;