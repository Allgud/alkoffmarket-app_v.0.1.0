import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './pages/Main'
import Add from './pages/Add'
import Navbar from './components/Navbar'
import Alert  from './components/Alert'

function App() {
  return (
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
    
  );
}

export default App;
