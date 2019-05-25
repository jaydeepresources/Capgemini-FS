import React, { Component } from 'react';
import Home from './Home';
import Services from './Services';

import {
    BrowserRouter as Router,
    Route,
    NavLink 
} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="#">React-App</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/services" activeClassName="active">Services</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/services" component={Services} />
            </Router>
        );
    }
}

export default Navbar;