import * as actionType from '../actionType';

const initialState = {
    skillsList : [{
        skill: '',
        rating: '',
        abilities: '',
    }]    
}

const skills = (state = initialState, action) => {
switch(action.type){
    case actionType.SET_SKILLS:
        return{
           skillsList: [state.skillsList, ...action.payload]
        }
        default:
            return state
    }
}

export default skills;