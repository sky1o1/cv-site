import { createAction, handleActions } from 'redux-actions';

export const setActiveLink = createAction('SET_ACTIVE_LINK');

const INITIAL_STATE = {
    activeLinks : []
}

const linkReducer = handleActions(
    {
        'SET_ACTIVE_LINK':
        (state, action) => {
            const socialMedia = action.payload
            console.log(socialMedia)
            // console.log('test active links', state.activeLinks)
            const updatedState = [...state.activeLinks]
            console.log(updatedState)
            const indexOfSocialMedia = updatedState.indexOf(socialMedia)
            if(indexOfSocialMedia === -1){
                updatedState.push(socialMedia)
            }else{
                updatedState.splice(indexOfSocialMedia, 1)
            }
            return updatedState
        }
    },

    INITIAL_STATE
)

export default linkReducer;
