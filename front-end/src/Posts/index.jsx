import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Heading,
    Button,
    Card,
    Content,
    Columns
} from 'react-bulma-components'
import { withRouter } from 'react-router-dom'

class AdminEmail extends Component {
    static propTypes = {
        userEmail: PropTypes.string.isRequired,
    }

    navigateToCreatePost = () => {
        const { history, userEmail } = this.props

        history.push(`/MyPosts/${userEmail}/posts/create`)
    }

    render() {
        const { userEmail } = this.props

        return (
            <div className="admin-email">
                <Card>
                    <Card.Content>
                        <Content>
                            <Heading renderAs="h2">Hello {userEmail}</Heading>
                            <Button
                                // color="primary"
                                onClick={this.navigateToCreatePost}
                            >
                                Create Post
                            </Button>
                        </Content>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default withRouter(AdminEmail)