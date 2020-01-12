import React from 'react';
import { Redirect } from 'react-router-dom';


const LoginUser = (props) => {


    if (props.userLoggedIn === true) {
        return <Redirect to="/albums" />    }
    return (
        <div>
            <h1>Login Page</h1>

            <main>
                <section>
                    <div className="alert alert-danger" role="alert" id="errorMessage"></div>
                    <form className="form" onSubmit={props.loginUser}>
                        <div className="form-group">
                            <label htmlFor="email" id="loginEmailLabel">Email</label>
                            <input type="email" className="form-control" id="loginEmail" placeholder="Enter Email" required onChange={props.handleEmail} value={props.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" id="loginPasswordLabel">Password</label>
                            <input type="password" className="form-control" id="loginPassword" placeholder="Enter Password" required onChange={props.handlePassword} value={props.password} />
                        </div>
                        <button typeof="submit" className="btn btn-default btn-success" id="loginButton">Login</button>
                    </form>
                </section>
            </main>
        </div>
    );
}


export default LoginUser;