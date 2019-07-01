import { createActions, handleActions, combineActions } from 'redux-actions'

const SIGN_IN_EMAIL_REQUEST = 'auth/SIGN_IN_EMAIL_REQUEST';
const SIGN_IN_EMAIL_SUCCESS = 'auth/SIGN_IN_EMAIL_SUCCESS';
const SIGN_IN_EMAIL_FAILED = 'auth/SIGN_IN_EMAIL_FAILED';

const SIGN_IN_GOOGLE_REQUEST = 'auth/SIGN_IN_GOOGLE_REQUEST';
const SIGN_IN_GOOGLE_SUCCESS = 'auth/SIGN_IN_GOOGLE_SUCCESS';
const SIGN_IN_GOOGLE_FAILED = 'auth/SIGN_IN_GOOGLE_FAILED';

const SIGN_IN_FACEBOOK_REQUEST = 'auth/SIGN_IN_FACEBOOK_REQUEST';
const SIGN_IN_FACEBOOK_SUCCESS = 'auth/SIGN_IN_FACEBOOK_SUCCESS';
const SIGN_IN_FACEBOOK_FAILED = 'auth/SIGN_IN_FACEBOOK_FAILED';

const SIGN_OUT_REQUEST = 'auth/SIGN_OUT_REQUEST';
const SIGN_OUT_SUCCESS = 'auth/SIGN_OUT_REQUEST';
const SIGN_OUT_FAILED = 'auth/SIGN_OUT_FAILED';

const initialState = {
    color: 'red',
    number: 0
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case SIGN_IN_EMAIL_REQUEST:
            return state;
        case SIGN_IN_EMAIL_SUCCESS:
            return state;
        case SIGN_IN_EMAIL_FAILED:
            return state;
        case SIGN_IN_GOOGLE_REQUEST:
            return state;
        case SIGN_IN_GOOGLE_SUCCESS:
            return state;
        case SIGN_IN_GOOGLE_FAILED:
            return state;
        case SIGN_IN_FACEBOOK_REQUEST:
            return state;
        case SIGN_IN_FACEBOOK_SUCCESS:
            return state;
        case SIGN_IN_FACEBOOK_FAILED:
            return state;
        case SIGN_OUT_REQUEST:
            return state;
        case SIGN_OUT_SUCCESS:
            return state;
        case SIGN_OUT_FAILED:
            return state;
        default:
            return state;
    }
}