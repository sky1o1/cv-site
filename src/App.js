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
  var initialPage = '/'

    function renderSwitch() {
        switch (initialPage) {
            case 'home':
                // return <PrivateRoute component={Home} />
                return <Home />
            case 'resume':
                // return <PrivateRoute component={Resume} />
            case 'portfolio':
                // return <PrivateRoute component={Services} />
            case 'services':
                // return <PrivateRoute component={Contact} />
            case 'contact':
                // return <PrivateRoute component={Projects} />
            default:
                // return <PrivateRoute component={Index} />
                return <Sidebar />
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

  return (
    <>
      <AppBarMenu />
      <div id="lonon-page"> <a href="#" class="js-lonon-nav-toggle lonon-nav-toggle"><i></i></a>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <PrivateRoute component={Sidebar} />
            <PrivateRoute path='/' component={Index} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/resume' component={Resume} />
            <PrivateRoute path='/portfolio' component={Projects} />
            <PrivateRoute path='/services' component={Services} />
            <PrivateRoute path='/contact' component={Contact} />
          
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
