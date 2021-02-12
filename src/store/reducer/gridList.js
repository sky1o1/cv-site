import { createAction, handleAction } from 'redux-actions';

export const setServiceList = createAction('SET_SERVICE_LIST');
export const setProjectList = createAction('SET_PROJECT_LIST');
const INITIAL_STATE = {
    serviceList: [],
    // projectList: []
}

const gridListReducer = handleAction(
    
        'SET_SERVICE_LIST',
        (state, action) => ({
            serviceList: [...state.serviceList, action.payload]
        }),
        // 'SET_PROJECT_LIST':
        // (state, action) => ({
        //     projectList: [state.projectList, ...action.payload]
        // }),
   
    INITIAL_STATE
)

export default gridListReducer;