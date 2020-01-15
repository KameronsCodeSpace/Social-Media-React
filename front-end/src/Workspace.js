import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

const Workspace = (props) => {
    if (props.isAuthenticated === false) {
        return <Redirect to='/' />
    }
    return (
        <div>
            <h1>Workspace Page</h1>
            <p>{`This is the User: ${this.props.currentUser.email}`}</p>
            <p>{`Authentication: ${props.isAuthenticated}`}</p>

        </div>
    );
}

export default Workspace;