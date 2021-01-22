import { combineReducers } from 'redux';
import authenticate from './authenticate';
import profile from './profile';
import skills from './skills';
import language from './language';
import education from './education';
import recommendation from './recommendation';
import experience from './experience';
import services from './services';
import projects from './projects';
import colors from './colors';
import links from './links';


const rootReducer = combineReducers({
    auth: authenticate,
    profile,
    skills,
    language,
    recommendation,
    experience,
    education,
    services,
    projects,
    colors,
    links
})

export default rootReducer;
