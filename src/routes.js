import React, { useState } from 'react';
import { Route } from "react-router-dom";
import Index from './views/Index';
import Resume from './views/resume/Resume';
import Home from './views/home/Home';
import Projects from './views/project/Projects';
import Services from './views/services/Services';
import Contact from './views/Contact';


const Routes = () => (
    
    <div>
        
        <Route exact path='/' component={Index}></Route>
        <Route exact path='/home' component={Home} ></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/portfolio' component={Projects}></Route>
        <Route exact path='/services' component={Services}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </div>
)

// function Routes() {

//     var initialPage = '/'

//     function renderSwitch() {
//         switch (initialPage) {
//             case 'home':
//                 return <Home />
//             case 'resume':
//                 return <Resume />
//             case 'portfolio':
//                 return <Projects />
//             case 'services':
//                 return <Services />
//             case 'contact':
//                 return <Contact />
//             default:
//                 return <Home />
//         }
//     }

//     return (
//         <>
//         {
//             renderSwitch()
//         }
//         </>
//     )

// }

export default Routes