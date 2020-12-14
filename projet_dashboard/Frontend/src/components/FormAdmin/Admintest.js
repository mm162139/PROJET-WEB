import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "../navbar.component";
import Widget1 from "../create-data.component";
import CreateUser from "../create-user.component";
import EditWidget from "../edit-widget.component";


function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br/>
                <Route path="/create" component={Widget1} />
                <Route path="/user" component ={CreateUser}/>
                <Route path="/edit/:id" component={EditWidget}/>
            </div>
        </Router>
    );
}

export default App;