import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import MovieQuote from './movie_quote';
import SignUp from './sign_up';
import SignIn from './sign_in';
import auth from '../hoc/auth';
import redirect from '../hoc/redirect';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/secret-list" component={auth(SecretList)}/>
            <Route path="/movie-quote" component={MovieQuote}/>
            <Route path="/sign-up" component={redirect(SignUp, '/about')}/>
            <Route path="/sign-in" component={redirect(SignIn, '/movie-quote')}/>
        </div>
    </div>
);

export default App;
