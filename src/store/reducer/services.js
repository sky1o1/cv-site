import { createAction, handleAction } from 'redux-actions';

export const setServices = createAction('SET_SERVICES');

const INITIAL_VALUES = {
    servicesList : []   
}

const servicesReducer = handleAction(
    'SET_SERVICES',
    (state, action) =>( {
        servicesList: [...state.servicesList, action.payload]
    }),
    INITIAL_VALUES
)

export default servicesReducer;