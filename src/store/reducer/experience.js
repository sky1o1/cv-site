import { createAction, handleAction } from 'redux-actions';

export const setExperience = createAction('SET_EXPERIENCE');

const INITIAL_STATE = { 
        expList:[]
}; 

const experienceReducer = handleAction(
    'SET_EXPERIENCE',
    (state, action) => ({
       expList: [...state.expList, action.payload]
    }),
    INITIAL_STATE
)

export default experienceReducer;