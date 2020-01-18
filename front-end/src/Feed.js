import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';


const Feed = (props) => {
    if (props.isAuthenticated === false) {
        return <Redirect to='/' />
    }

    return (
        <div>
            <div className="pageHeadersWrapper">
                <h1>Feed</h1>
                <h2 className="usernameHeader">{`User: ${props.currentUser.email}`}</h2>
                <p hidden>{`Authentication: ${props.isAuthenticated}`}</p>
            </div>

        </div>
    );
}

export default Feed;