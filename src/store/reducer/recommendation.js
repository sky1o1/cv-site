import { createAction, handleAction } from 'redux-actions';

export const setRecommendation = createAction('SET_RECOMMENDATION');

const INITIAL_VALUES = {
    recommmendationList: [{
        recommendation: '',
        recommendedBy: '',
        company: '',
        position: '',
    }]
}

const recommendationReducer = handleAction(
    'SET_RECOMMENDATION',
    (state, action) =>( {
        recommmendationList: [state.recommmendationList, action.payload]
    }),
    INITIAL_VALUES
)

export default recommendationReducer;