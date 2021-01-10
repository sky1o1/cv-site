import * as actionType from '../actionType';

const initState = {
    recommmendationList: [{
        recommendation: '',
        recommendedBy: '',
        company: '',
        position: '',
    }]
}

const recommendation = (state = initState, action) => {
    switch(action.type){
        case actionType.SET_RECOMMENDATION:
            return {
                recommmendationList: [state.recommmendationList, action.payload]
            }
        default:
            return state    
    }
}

export default recommendation;