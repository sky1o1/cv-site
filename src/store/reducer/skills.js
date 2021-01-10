import { createAction, handleAction } from 'redux-actions';

export const setLanguage = createAction('SET_SKILLS');

const INITIAL_VALUES = {
    skillsList : [{
        skill: '',
        rating: '',
        abilities: '',
    }]   
}

handleAction(
    'SET_SKILLS',
    (state, action) =>( {
        skillsList: [state.skillsList, ...action.payload]
    }),
    INITIAL_VALUES
)