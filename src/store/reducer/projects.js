import {createAction, handleAction} from 'redux-actions';

export const setProject = createAction('SET_PROJECT');

const INITIAL_STATE = {
    projectList: [{
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
    }]
}

const projectReducer = handleAction(
    'SET_PROJECT',
    (state, action) => {
        projectList = [state.projectList, ...action.payload]
    },
    INITIAL_STATE
)

export default projectReducer;