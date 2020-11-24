import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin.js';


const App = () => {
  return(
    <> 
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/Admin" exact component={Admin} /> 
        </Switch>
      </BrowserRouter>
      
    </>
    );

};

export default App;