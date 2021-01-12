import { createAction, handleAction } from 'redux-actions';

export const setProjects = createAction('SET_PROJECTS');

const INITIAL_STATE = {
    projectList: []
}

const projectReducer = handleAction(
    'SET_PROJECTS',
    (state, action) => ({
        projectList : [...state.projectList, action.payload]
    }),
    INITIAL_STATE
)

export default projectReducer;