import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Participants</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Tache à Réaliser</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/edit/:id" className="nav-link">Editer</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}