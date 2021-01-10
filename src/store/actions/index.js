import * as actionType from '../actionType'; 

export const setAuthenticate = (setAuthenticate) => {
    return{
        type: actionType.SET_AUTHENTICATE,
        payload: setAuthenticate
    }
}

export const setProfile = (setProfile) => { 
   return {
       type: actionType.SET_PROFILE,
       payload: setProfile
   }
}; 

export const setSkills = (setSkills) => {
    return{
        type: actionType.SET_SKILLS,
        payload: setSkills
    }
}

export const setLanguage = (setLanguage) => {
    return {
        type: actionType.SET_LANGUAGE,
        payload: setLanguage
    }
}

export const setRecommendation = (setRecommendation) => {
    return{
        type: actionType.SET_RECOMMENDATION,
        payload: setRecommendation
    }
}

export const setExperience = (setExperience) => {
    return{
        type: actionType.SET_EXPERIENCE,
        payload: setExperience
    }
}