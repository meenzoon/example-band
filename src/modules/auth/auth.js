import { createActions, handleActions, combineActions } from 'redux-actions'

const initialState = {};

const {} = createActions({
    SIGN_IN_EMAIL_REQUEST: () => {},
    SIGN_IN_EMAIL_SUCCESS: () => {},
    SIGN_IN_EMAIL_FAILED: () => {}
});

const reducer = handleActions(
    {
        
    },
    initialState
);

export default reducer;