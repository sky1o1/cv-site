import { createAction, handleAction } from 'redux-actions';

export const setEducation = createAction('SET_EDUCATION');

const INITIAL_VALUES = {
    educationList : [{
        university: '',
        degree: '',
        description: '',
        startYear: '',
        endYear: '',
    }]
}

const educationReducer = handleAction(
    'SET_EDUCATION',
    (state, action) =>( {
        educationList: [state.educationList, ...action.payload]
    }),
    INITIAL_VALUES
)

export default educationReducer;