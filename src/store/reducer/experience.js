import { createAction, handleAction } from 'redux-actions';

export const setExperience = createAction('SET_EXPERIENCE');

const INITIAL_STATE = { 
    experienceList: [{
        company: '',
        post: '',
        description: '',
        startYear: '',
        endYear: '',
    }]
}; 

handleAction(
    'SET_EXPERIENCE',
    (state, action) => ({
        experienceList: [state.experienceList, ...action.payload]
    }),
    INITIAL_STATE
)