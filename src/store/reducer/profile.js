import { createAction, handleActions } from 'redux-actions';

export const setProfile = createAction('SET_PROFILE');
export const setProfileImage = createAction('SET_PROFILE_IMAGE');
export const setImage2 = createAction('SET_IMAGE2');
export const setImage3 = createAction('SET_IMAGE');
export const setFullname = createAction('SET_FULLNAME');
export const setProfession = createAction('SET_PROFESSION');
export const setInformation = createAction('SET_INFORMATION');
export const setInformationII = createAction('SET_INFORMATIONII');
export const setPhoneNumber = createAction('SET_PHONE_NUMBER');
export const setEmail = createAction('SET_EMAIL');
export const setLocation = createAction('SET_LOCATION');

const INITIAL_STATE = { 
    fullName: '',
    profession: '',
    dob: '',
    phoneNumber: '',
    email: '',
    website: '',
    freelance: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    skype: '',
    location: '',
    information: '',
    information2: '',
    profileImage: '',
    image2: '',
    image3: '',
    createdAt: '',
}; 

const profileReducer = handleActions(
    {
    'SET_PROFILE':
    (state, action) => {
        return {...action.payload}
    } ,
    'SET_PROFILE_IMAGE':
    (state, action) => ({
        ...state,
        profileImage : action.payload
    }),
    'SET_FULLNAME':
    (state, action) => {
        console.log('action,', action.payload)
        return {...state, 
        fullName: action.payload}
    } ,
    'SET_PROFESSION':
    (state, action) => ({
        ...state,
        profession : action.payload
    }),
    'SET_INFORMATION':
    (state, action) => ({
        ...state,
        information : action.payload
    }),
    'SET_INFORMATIONII':
    (state, action) => ({
        ...state,
        information2 : action.payload
    }),
    'SET_PHONE_NUMBER':
    (state, action) => ({
        ...state,
        phoneNumber : action.payload
    }),
    'SET_EMAIL':
    (state, action) => ({
        ...state,
        email : action.payload
    }),
    'SET_LOCATION':
    (state, action) => ({
        ...state,
        location : action.payload
    }),
    'SET_IMAGE2':
    (state, action) => ({
        ...state,
        image2 : action.payload
    }),
    'SET_IMAGE3':
    (state, action) => ({
        ...state,
        image3 : action.payload
    })
},
    INITIAL_STATE
  );

  export default profileReducer;
  