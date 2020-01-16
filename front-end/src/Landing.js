import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1 id="landingHeader">Collage Entourage</h1>
            <p id="landingCaption"><strong>A Combination Of Creation</strong></p>
            <br />
            <br />
            <img alt='cover' id="landingPageGIF" src='https://media.giphy.com/media/JWGjPl2SpXUFW/giphy.gif'></img>
            <br />
            <br />
            <br />
            <Link className="landingPageLoginButton btn btn-warning" to='/LoginUser'><strong>Login</strong></Link>
            <br />
            <br />
            <Link className="landingPageSignUpButton btn btn-success" to='/SignUp'><strong>Sign Up</strong></Link>

        </div>
    );
}

export default Landing;