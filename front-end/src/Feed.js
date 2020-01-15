import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';


const Feed = (props) => {
    if (props.isAuthenticated === false) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <h1>Feed Page</h1>
            <p>{`This is the User: ${this.props.currentUser.email}`}</p>
            <p>{`Authentication: ${props.isAuthenticated}`}</p>

        </div>
    );
}

export default Feed;