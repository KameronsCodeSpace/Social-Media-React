import React from 'react';
import { Redirect } from 'react-router-dom';

const SignUp = (props) => {
    if (props.userLoggedIn === true) {
        return <Redirect to="/albums" />
    }
        return (
            <div>
                <h1 id="signUpPageHeader">Sign Up Page</h1>

                <main>
                    <section>
                        <div className="alert alert-danger" method="POST" role="alert" id="errorMessage"></div>
                        <form className="form" onSubmit={props.signUpUser} action="http://localhost:3000/albums">
                            <div className="form-group">
                                <label htmlFor="email" id="signUpEmailLabel">Email</label>
                                <input type="email" className="form-control" id="signUpEmail" placeholder="Enter Email" required onChange={props.handleEmail}  value={props.email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" id="signUpPasswordLabel">Password</label>
                                <input type="password" className="form-control" id="signUpPassword" placeholder="Enter Password" required onChange={props.handlePassword} value={props.password}/>
                            </div>
                            <button typeof="submit" className="btn btn-default btn-success" id="signUpButton">Create Account</button>
                        </form>
                    </section>
                </main>
            </div>
        );
    }

export default SignUp;

// class SignUp extends Component {