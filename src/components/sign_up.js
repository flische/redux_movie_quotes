import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import Input from './input';

class SignUp extends Component {
    
    register = (values) =>{
        console.log('Register Values:', values);

        this.props.signUp(values); //<-- making a real call to the server and making a real acct for you!
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            
        <div>    
            <h1 className="center">Sign Up</h1>
            <form onSubmit={handleSubmit(this.register)}> 
                <div className="row">
                    <Field className="col-6 offset-3" name="email" component={Input} label="Email"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3" name="password" component={Input} label="Password"/>
                </div>
                <div className="row">
                    <Field type="password" className="col-6 offset-3" name="confirmPassword" component={Input} label="Confirm Password"/>
                </div>
                <div className="row">
                    <div className="d-flex col-6 offset-3 justify-content-end">
                        <button className="btn btn-outline-success">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>    
        )
    }
}

function validate(values){
    const { email,  password, confirmPassword } = values;
    const errors = {};

    if(!email){
        errors.email = 'Please enter your email';
    }

    if(!password) errors.password = 'Please choose a password'; // <-- if statement on 1 line! 

    if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate       // <-- same thing as line below! since it's the same name!
    // validate: validate
})(SignUp);

export default connect( null, { signUp } )(SignUp);