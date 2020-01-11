import React from 'react';
import './App.css';

const Albums = (props) => {

    console.log('Checking User', props.currentUser.user.email)
    const loggedInUser = props.currentUser.user.email;

    return (
        <div>
            <h1>Albums Page</h1>
            <p>{`This is the User: ${loggedInUser}` }</p>

        </div>
    );
}

export default Albums;