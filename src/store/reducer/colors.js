import { createAction, handleAction } from 'redux-actions';

export const setColors = createAction('SET_COLORS');

const INITIAL_VALUES = {
    backColor: '',
    textColor: '',
    headColor: '',
    textColor: '',
}

const colorsReducer = handleAction(
    'SET_COLORS',
    (state, action) =>{
        return {...action.payload}
    },
    INITIAL_VALUES
)

export default colorsReducer;