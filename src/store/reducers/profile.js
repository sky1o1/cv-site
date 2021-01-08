import * as actionType from '../actionType';

const initialState = { 
    fullName: '',
    profession: '',
    dob: '',
    phoneNumber: '',
    email: '',
    degree: '',
    website: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    skype: '',
    location: '',
    information: '',
    image: '',
    createdAt: '',
}; 

const profile = (state=initialState,action) => {
    switch(action.type){
        case actionType.SET_PROFILE:
            return{
                ...state,
                profile : action.payload
            }
            default:
                return state; 
    }
}; 
export default profile 