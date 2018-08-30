import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav style={ {padding:'0 10px'} } className="blue">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            <Link to="/movie-quotes">Movie Quote</Link>
                        </li>
                        <li>
                            <Link to="/sign-up">Sign Up</Link>
                        </li>
                        <li>
                            <button className="btn blue darken-2">Sign In</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;