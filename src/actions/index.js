import types from './types';
import axios from 'axios';

export const signIn = credentials => async dispatch => {
    try {
        const response = await axios.post('http://api.reactprototypes.com/signin', credentials);
        console.log('Sign In response: ', response);

        localStorage.setItem('token: ', response.data.token);  // <-- save the token to local storage!

        dispatch({ type: types.SIGN_IN} );
    } catch(error) {
        dispatch({
            type: types.AUTH_ERROR,
            error: 'Invalid email and/or password'
        })
    }
}

export const signUp = credentials => async dispatch => {
    const response = await axios.post('http://api.reactprototypes.com/signup', credentials);

    console.log('Sign Up response: ', response);

    localStorage.setItem('token', response.data.token); 

    dispatch({
        type: types.SIGN_UP,
        error: 'Error creating account'
    });
}

export const signOut = () => {
    localStorage.removeItem('token');

    return { type: types.SIGN_OUT }
};
    
export const getMovieQuote = () => async dispatch => {
    const axiosConfig = {
        headers: {  // <-- we have to add a header to our request with a property of authorization that has the token
            authorization: localStorage.getItem('token')
        }
    };

    const response = await axios.get('http://api.reactprototypes.com', axiosConfig);

    console.log('Movie Quote response: ', response);

    dispatch({
        type: types.GET_MOVIE_QUOTE,
        quote: response.data.message
    });
}