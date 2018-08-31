import React, { Component } from 'react';
import auth from '../hoc/auth';

class MovieQuote extends Component {
    render(){
        return (
            <div>
                <h1 className="center">Movie Quote!</h1>
                <h3 className="center">I eat pieces of shit like you for breakfast</h3>
            </div>
        );
    }
}

export default auth(MovieQuote, '/sign-up');