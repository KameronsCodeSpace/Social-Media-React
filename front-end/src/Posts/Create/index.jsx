import React, { Component } from 'react'
import PostForm from '../../Components/Posts/PostForm'
// import { MyContext } from '/Components/User/UserProvider'

class AdminPostCreate extends Component {

    render() {
        const { currentUser, isAuthenticated } = this.props

        // const { userSession, userEmail } = this..state.currentUser
        return (
            <PostForm
                currentUser={currentUser}
                isAuthenticated={isAuthenticated}
            />
        )
    }
}

// AdminPostCreate.contextType = MyContext
export default AdminPostCreate;
