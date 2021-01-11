import { createAction, handleAction } from 'redux-actions';

export const setAuthenticate = createAction('SET_AUTHENTICATE');

const INITIAL_VALUES = {
    isAuthenticated: ''
}

const authReducer = handleAction(
    'SET_AUTHENTICATE',
    (state, action) => ({
        ...state,
        isAuthenticated: action.payload
    }),
    INITIAL_VALUES
)

export default authReducer;