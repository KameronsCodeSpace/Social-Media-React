import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

class Feed extends Component {
    state = { user: {} }

    componentDidMount() {
        const { currentUser } = this.props

        const userEmail = currentUser.email

        this.setState({ userEmail })
    }
    render() {
        const { userEmail } = this.state
        const { currentUser, isAuthenticated } = this.props

        if (isAuthenticated === false) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h1>Feed Page</h1>
                <p>{`This is the User: ${this.props.currentUser.email}`}</p>
                <p>{`Authentication: ${this.props.isAuthenticated}`}</p>
            </div>
        )

    }
}


export default Feed;

// const Feed = (props) => {
//     if (props.isAuthenticated === false) {
//         return <Redirect to='/' />
//     }

//     return (
//         <div>
//             <h1>Feed Page</h1>
//             <p>{`This is the User: ${props.currentUser.email}`}</p>
//             <p>{`Authentication: ${props.isAuthenticated}`}</p>

//         </div>
//     );
// }