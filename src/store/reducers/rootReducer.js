import { combineReducers } from 'redux';
import authenticate from './authenticate';
import profile from './profile';
import skills from './skills';
import language from './language';
import recommendation from './recommendation';
import experience from './experience';


const rootReducer = combineReducers({
    auth: authenticate,
    profile,
    skills,
    language,
    recommendation,
    experience
})

export default rootReducer;
