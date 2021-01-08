import * as actionType from '../actionType';

const initialState = {
    languageList: [{
        language:'',
        level:'',
        listening: '',
        writing: '',
        speaking: '',
        reading: '',
        avg:'',
    }]
}
const language = (state=initialState, action) => {
switch(action.type){
    case actionType.SET_LANGUAGE:
        return{
            languageList: [state.languageList, ...action.payload]
        }
        default:
            return state
}
}

export default language;