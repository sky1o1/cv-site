import { createAction, handleAction } from 'redux-actions';

export const setSkills = createAction('SET_SKILLS');

const INITIAL_VALUES = {
    skillsList : [{
        skill: '',
        rating: '',
        abilities: '',
    }]   
}

const skillsReducer = handleAction(
    'SET_SKILLS',
    (state, action) =>( {
        skillsList: [state.skillsList, ...action.payload]
    }),
    INITIAL_VALUES
)

export default skillsReducer;