import React from 'react';
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div>
            <h1>SignUp Page</h1>
            <input className="inputField" placeholder='Enter Email'></input>
            <Link className="links" to="/Feed">
                <h2 className="createAccountParagraph">Create Account</h2>
            </Link>
        </div>
    );
}

export default SignUp;