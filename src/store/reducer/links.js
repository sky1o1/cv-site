import { createAction, handleActions } from 'redux-actions';

export const setFacebook = createAction('SET_FACEBOOK');
export const setInstagram = createAction('SET_INSTAGRAM');
export const setLinkedin = createAction('SET_LINKEDIN');
export const setGithub = createAction('SET_GITHUB');

const INITIAL_STATE = {
    facebook: false,
    instagram: false,
    linkedin: false,
    github: false
}

const linkReducer = handleActions(
    {
        'SET_FACEBOOK':
        (state, action) => ({
            ...state,
            facebook: action.payload
        })
    },
    {
        'SET_INSTAGRAM':
        (state, action) => ({
            ...state,
            instagram: action.payload
        })
    },
    {
        'SET_LINKEDIN':
        (state, action) => ({
            ...state,
            linkedin: action.payload
        })
    },
    {
        'SET_GITHUB':
        (state, action) => ({
            ...state,
            github: action.payload
        })
    },
    INITIAL_STATE
)

export default linkReducer;
