import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';  
import {useDispatch} from 'react-redux';
import PrivateRoute from './common/PrivateRoute';  
import {setAuthenticate} from './store/reducer/authenticate';
import './App.css';
import Sidebar from '../src/views/Sidebar';
import Index from '../src/views/Index';
import ScrollToTop from '../src/services/ScrollToTop';
import {auth} from './services/firebase/config';
import Login from './views/auth/Login';
import Home from './views/home/Home';
import Resume from './views/resume/Resume';
import Services from './views/services/Services';
import Contact from './views/Contact';
import Projects from './views/project/Projects';


function App() {
 const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if(user){
        dispatch(setAuthenticate(true))
      }else{
        dispatch(setAuthenticate(false))
      }
    })
  })

  return (
 
    <div id="lonon-page"> <a href="#" class="js-lonon-nav-toggle lonon-nav-toggle"><i></i></a>

  <Router>
  <ScrollToTop/>
      <Switch>
      <Route exact path='/login'>
        <Login />
      </Route>
    <PrivateRoute component={Sidebar}/>
    <PrivateRoute path='/' component={Index} />
    <PrivateRoute path='/home' component={Home} />
    <PrivateRoute path='/resume' component={Resume} />
    <PrivateRoute path='/portfolio' component={Projects} />
    <PrivateRoute path='/services' component={Services} />
    <PrivateRoute path='/contact' component={Contact} />


    </Switch>
  </Router>
 </div>

  );
}

export default App;
