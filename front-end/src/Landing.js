import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <h1>Collage Entourage</h1>
            <p>A Combination Of Creation</p>
            <br />
            <br />
            <img alt='cover' src='https://media.giphy.com/media/JWGjPl2SpXUFW/giphy.gif'></img>
            <br />
            <br />
            <br />
            <Link className="btn btn-warning" to='/LoginUser'>Login</Link>
            <br />
            <br />
            <Link className="btn btn-success" to='/SignUp'>Sign Up</Link>

        </div>
    );
}

export default Landing;