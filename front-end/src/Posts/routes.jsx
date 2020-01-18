import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import AdminPostCreate from '../Posts/./Create/index'

class AdminEmailPostsRoutes extends Component {
    // state = { user: {} }
    static propTypes = {
        match: PropTypes.object.isRequired
    }

    render() {
        const { isAuthenticated, currentUser } = this.props

        console.log("Match route Log", currentUser)
        console.log("authenticate route", isAuthenticated)
        return (
            <Switch>
                <Route
                    exact
                    path={this.props.match.url}
                    render={() => <div>Admin Posts</div>}
                />
                <Route
                    path={`${this.props.match.url}/create`}
                    render={() => <AdminPostCreate isAuthenticated={isAuthenticated} currentUser={currentUser}  />}
                />
                <Route
                    exact
                    path={`${this.props.match.url}/:post_id`}
                    render={() => <div>Admin view page</div>}
                />
                <Route
                    path={`${this.props.match.url}/:post_id/edit`}
                    render={() => <div>Admin edit page</div>}
                />
            </Switch>
        )
    }
}

export default AdminEmailPostsRoutes