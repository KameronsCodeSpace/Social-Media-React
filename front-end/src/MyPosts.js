import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom';
import AdminEmailPostsRoutes from './Posts/routes'
import AdminEmail from './Posts/index'

class MyPosts extends Component {
    state = { user: {} }
    static propTypes = {
        match: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { currentUser } = this.props
        console.log("mount user", currentUser.email)


        const userEmail = currentUser.email

        this.setState({ userEmail })
    }
    render() {
        const { userEmail } = this.state
        const { isAuthenticated } = this.props

        console.log("Match Log", this.props.match.params.userID)
        // console.log("render user", currentUser)
        console.log("authenticate", isAuthenticated)

        // if (isAuthenticated === false) {
        //     return <Redirect to='/' />
        // }
        return (
            <Switch>
                <Route
                    exact
                    path={this.props.match.url}
                    render={() => <AdminEmail userEmail={userEmail}/>}
                />
                <Route
                    path={`${this.props.match.url}/posts`}
                    render={({ match }) => <AdminEmailPostsRoutes match={match} currentUser={this.props.match.params.userID} isAuthenticated={this.props.isAuthenticated} />} />
                    />
            </Switch>
            )
        }
    }

    export default MyPosts;
