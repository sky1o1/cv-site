import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { GridProvider } from "../src/views/services/dragNdrop/GridContext";
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DndProvider backend={HTML5Backend}>
        <GridProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </GridProvider>
      </DndProvider>,
    </PersistGate>
  </Provider>
), document.getElementById('root'));

serviceWorker.unregister();

