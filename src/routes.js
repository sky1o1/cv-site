import React, { useEffect, useState } from 'react';
import { useParams, Route } from "react-router-dom";
import Index from './views/Index';
import Resume from './views/resume/Resume';
import Home from './views/home/Home';
import Projects from './views/project/Projects';
import Services from './views/services/Services';
import Contact from './views/Contact';
import Login from './views/auth/Login';
import Draggable from './views/project/ProjectTest';


const Routes = () => (
    <div>
        
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/home' component={Home} ></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/portfolio' component={Projects}></Route>
        <Route exact path='/services' component={Services}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/drag' component={Draggable}></Route>
        {/* <Route exact path='/login' component={Login}></Route> */}
    </div>
)

export default Routes