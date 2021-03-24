import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './pages/Main'
import Add from './pages/Add'
import Navbar from './components/Navbar'
import Alert  from './components/Alert'
import AlertState from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>  
          <div className="container">
            <Navbar />
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Main}/>
              <Route path={'/add'} component={Add}/>
            </Switch>
          </div>
        </BrowserRouter>
     </AlertState>
    </FirebaseState> 
  );
}

export default App;
