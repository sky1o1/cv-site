import * as actionType from '../actionType';

const initState = {
    experienceList: [{
        company: '',
        post: '',
        description: '',
        startYear: '',
        endYear: '',
    }]
}

const experience = (state = initState, action) => {
    switch(action.type){
        case actionType.SET_EXPERIENCE:
            return{
                experienceList: [state.experienceList, ...action.payload]
            }
        default:
            return state
    }
}

export default experience;