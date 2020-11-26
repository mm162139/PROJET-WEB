import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from "react";

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Admin" exact component={Admin} />
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
