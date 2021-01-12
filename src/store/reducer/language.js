import { createAction, handleAction } from 'redux-actions';

export const setLanguage = createAction('SET_LANGUAGE');

const INITIAL_VALUES = {
    languageList: []
}

const languageReducer = handleAction(
    'SET_LANGUAGE',
    (state, action) =>( {
        languageList: [...state.languageList, action.payload]
    }),
    INITIAL_VALUES
)

export default languageReducer;