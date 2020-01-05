import React from 'react';
import './App.css';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <input placeholder='Enter Email'></input>
            <br />
            <br />
            <a href="/Feed">Log In</a>
            <br />
            <br />
            <a href="/SignUp">Sign Up</a>
        </div>
    );
}

export default Login;