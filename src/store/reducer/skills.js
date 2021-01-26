import { createAction, handleActions } from 'redux-actions';

export const setSkills = createAction('SET_SKILLS');
export const setAbilities = createAction('SET_ABILITIES');

const INITIAL_VALUES = {
    abilities: '',
    skillsList : []   
}

const skillsReducer = handleActions(
        {
            'SET_ABILITIES':
            (state, action) => {
                return {...action.payload}
            } ,
            'SET_SKILLS':
            (state, action) =>( {
                skillsList: [...state.skillsList, action.payload]
            }),
    },
    INITIAL_VALUES
)

export default skillsReducer;