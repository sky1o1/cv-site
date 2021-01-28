import React, { useEffect, useState } from 'react';
import Resume from '../src/views/resume/Resume';
import Home from '../src/views/home/Home';
import Projects from '../src/views/project/Projects';
import Services from '../src/views/services/Services';
import Contact from '../src/views/Contact';
import Login from '../src/views/auth/Login';

import { useParams } from "react-router-dom";

const New = () => {
    const { roomId } = useParams();
    if(roomId=='home'){
        return(
            <Home/>
        )
    }
    else if(roomId=='resume'){
        return(
            <Resume/>
        )
    }
    else if(roomId=='portfolio'){
        return(
            <Projects/>
        )
    }
    else if(roomId=='services'){
        return(
            <Services/>
        )
    }
    else if(roomId=='contact'){
        return(
            <Contact/>
        )
    }
    else if(roomId=='login'){
        return(
            <Login/>
        )
    }
    
    
    

}

const CVRoutes = () => {
  
    
    // console.log('room id :: ' ,roomId)
    return (
        <div>
        <div>
            <New/>
        </div>
        </div>
    )
}

export default CVRoutes
