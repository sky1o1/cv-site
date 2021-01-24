import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';    
import './App.css';
import Sidebar from '../src/views/Sidebar';
import Index from '../src/views/Index';
import CVRoutes from './CVRoutes';
import ScrollToTop from '../src/services/ScrollToTop';
function App() {
  return (
 
    <div id="lonon-page"> <a href="#" class="js-lonon-nav-toggle lonon-nav-toggle"><i></i></a>

    <Router>
      <ScrollToTop/>
    <>
      <Sidebar/>
      <Switch>
        <Route path ="/:roomId">
           <CVRoutes/>
          </Route>
         
          <Route path="/">
           <Index/>
          </Route>
      
      </Switch>
    </>
  
  </Router>
 </div>

  );
}

export default App;
