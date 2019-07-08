import { createAction, handleActions } from 'redux-actions'

// 액션 타입 정의
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

const signInEmailRequest = createAction(SIGN_IN_EMAIL_REQUEST);
const signInEmailSuccess = createAction(SIGN_IN_EMAIL_SUCCESS);
const signInEmailFailed = createAction(SIGN_IN_EMAIL_FAILED);

const signInGoogleRequest = createAction(SIGN_IN_GOOGLE_REQUEST);
const signInGoogleSuccess = createAction(SIGN_IN_GOOGLE_SUCCESS);
const signInGoogleFailed = createAction(SIGN_IN_GOOGLE_FAILED);

const signInFacebookRequest = createAction(SIGN_IN_FACEBOOK_REQUEST);
const signInFacebookSuccess = createAction(SIGN_IN_FACEBOOK_SUCCESS);
const signInFacebookFailed = createAction(SIGN_IN_FACEBOOK_FAILED);

const signOutRequest = createAction(SIGN_OUT_REQUEST);
const signOutSuccess = createAction(SIGN_OUT_SUCCESS);
const signOutFailed = createAction(SIGN_OUT_FAILED);



//초기 상태
const initialState = {
    isLoading: false,
    error: null
};

export default handleActions({
    [SIGN_IN_EMAIL_REQUEST]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_IN_EMAIL_SUCCESS]: (state) => Object.assign({}, state, {isLoading: false}),
    [SIGN_IN_EMAIL_FAILED]: (state, action) => Object.assign({}, state, {isLoading: true, error: action.payload}),
    [SIGN_IN_GOOGLE_REQUEST]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_IN_GOOGLE_SUCCESS]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_IN_GOOGLE_FAILED]: (state, action) => Object.assign({}, state, {isLoading: true, error: action.payload}),
    [SIGN_IN_FACEBOOK_REQUEST]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_IN_FACEBOOK_SUCCESS]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_IN_FACEBOOK_FAILED]: (state, action) => Object.assign({}, state, {isLoading: true, error: action.payload}),
    [SIGN_OUT_REQUEST]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_OUT_SUCCESS]: (state) => Object.assign({}, state, {isLoading: true}),
    [SIGN_OUT_FAILED]: (state, action) => Object.assign({}, state, {isLoading: true, error: action.payload})
}, initialState);