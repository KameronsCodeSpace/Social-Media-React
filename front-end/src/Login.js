import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Login() {

    return (
        <div className="loginDiv">
            <h1>Collage Entourage</h1>
            <p><strong>A Combination Of Creation</strong></p>
            <br />
            <br />
            <img src='https://media.giphy.com/media/JWGjPl2SpXUFW/giphy.gif' styles="border-radius: 100px"></img>
            <p><strong>Username</strong></p>
            <input type="text" className="inputField" placeholder='Email' />
            <br />
            <br />
            <Link className="links" to="/Feed">
                <strong>Log In</strong>
            </Link>
            <br />
            <br />
            <Link className="links" to="/SignUp">
                <strong>Sign Up</strong>
            </Link>
        </div>
    );
}

export default Login;