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
                <div className="pageHeadersWrapper">
                    <h1>Feed</h1>
                    <h2 className="usernameHeader">{`User: ${this.props.currentUser.email}`}</h2>
                    <p hidden>{`Authentication: ${this.props.isAuthenticated}`}</p>
                </div>
            </div>
        )
    }
}


export default Feed;