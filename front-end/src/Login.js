import React from 'react';
import './App.css';

function Login() {
    return (
        <div>
            <h1>Collage Entourage</h1>
            <p>A Combination Of Creation</p>
            <br />
            <br />
            <img src='https://media.giphy.com/media/JWGjPl2SpXUFW/giphy.gif'></img>
            <br />
            <br />
            <p>User Email: <input placeholder='Email'></input></p>
            <a href="/Feed">Log In</a>
            <br />
            <br />
            <a href="/SignUp">Sign Up</a>
        </div>
    );
}

export default Login;