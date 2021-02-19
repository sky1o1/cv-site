import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import { setAuthenticate } from './store/reducer/authenticate';
import { useDispatch } from 'react-redux';
import './App.css';
import Sidebar from '../src/views/Sidebar';
import Index from '../src/views/Index';
import ScrollToTop from '../src/services/ScrollToTop';
import { auth } from './services/firebase/config';
import Login from './views/auth/Login';
import Home from './views/home/Home';
import Resume from './views/resume/Resume';
import Services from './views/services/Services';
import Contact from './views/Contact';
import Projects from './views/project/Projects';
import AppBarMenu from './views/AppBar';


function App() {
  const dispatch = useDispatch()
  const [activePage, setActivePage] = useState('home')
  
    function renderSwitch(activePage) {
      console.log(activePage)
        switch (activePage) {
            case 'home':
              console.log('entered in home')
              return <Home />
            case 'resume':
              console.log('entered in resume')
              return <Resume />
            case 'portfolio':
              console.log('entered in poriejct')
              return <Projects />
            case 'services':
              console.log('entered in srevices')
              return <Services />
            case 'contact':
              console.log('entered in constact')
              return <Contact />
            default:
              console.log('entered in default')
              return <Index />
        }
    }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        dispatch(setAuthenticate(true))
      } else {
        dispatch(setAuthenticate(false))
      }
    })
  })

  console.log('actucve', activePage)

  return (
    <>
      <AppBarMenu />
      <div id="lonon-page"> <a href="#" class="js-lonon-nav-toggle lonon-nav-toggle"><i></i></a>
        {/* <Router>
          <ScrollToTop /> */}
          {/* <Switch>
            <Route exact path='/login'>
              <Login />
            </Route> */}
            {/* <PrivateRoute component={Sidebar} /> */}
           >
            {/* <PrivateRoute path='/' component={Index} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/resume' component={Resume} />
            <PrivateRoute path='/portfolio' component={Projects} />
            <PrivateRoute path='/services' component={Services} />
            <PrivateRoute path='/contact' component={Contact} /> */}

          
         
          
          {/* </Switch>
         
        </Router> */}
        <Sidebar setActivePage={setActivePage} />
        {renderSwitch(activePage)}
      </div>
    </>
  );
}

export default App;
