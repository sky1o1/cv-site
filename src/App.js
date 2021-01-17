import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';    
import './App.css';
import Sidebar from '../src/views/Sidebar';
import Index from '../src/views/Index';
import CVRoutes from './CVRoutes';

import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
function App() {
  return (
 
    <div id="lonon-page"> <a href="#" class="js-lonon-nav-toggle lonon-nav-toggle"><i></i></a>

    <Router>
     {/* {!user ? ( */}
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
     {/* ):( */}

  {/* <>
 
    <Sidebar/>
    <Switch>
      <Route path ="/room/:roomId">
  
        </Route>
       
        <Route path="/">
          <h1>Welcome</h1>
        </Route>
    
    </Switch>
 
   </> */}
     {/* )} */}
  
  </Router>
 </div>

  );
}

export default App;
