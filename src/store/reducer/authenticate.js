import { createAction, handleAction } from 'redux-actions';

export const setAuthenticate = createAction('SET_AUTHENTICATE');

const INITIAL_VALUES = {
    isAuthenticated: ''
}

handleAction(
    'SET_AUTHENTICATE',
    (state, action) => ({
        ...state,
        isAuthenticated: action.payload
    }),
    INITIAL_VALUES
)