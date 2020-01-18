import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }
    }

    // static propTypes = {
    //     userSession: PropTypes.object.isRequired,
    //     username: PropTypes.string.isRequired,
    //     post: PropTypes.object,
    //     type: PropTypes.string.isRequired,
    // }

    componentDidMount() {
        console.log('Loaded')
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addPost = async (event) => {
        event.preventDefault()

        console.log("add Post method starting", this.props.currentUser);
        let post_owner = this.props.currentUser;

        let title = this.state.title;
        let body = this.state.body
        let response = await axios.post(`http://localhost:3001/myposts/`, { post_owner, title, body  });
    }
    onSubmit = (event) => {
        event.preventDefault()

        const { type } = this.props
    }

    render() {
        return (

            <div>
                <form onSubmit={this.addPost} className="post-form">

                    <div>
                        <h1>Title</h1>
                        <br/>
                        <div>
                            <input
                                name="title"
                                onChange={this.onChange}
                                placeholder="Title of the Post"
                                value={this.state.title}
                            />
                        </div>
                    </div>

                    <div>
                        <h2>Post Description</h2>
                        <div>
                            <textarea
                                name="body"
                                onChange={this.onChange}
                                placeholder="Create Posts here!"
                                rows={10}
                                columns={10}
                                value={this.state.body}
                            />
                        </div>
                    </div>

                    <div>
                        <button>Cancel</button>
                    </div>
                    <div>
                        <button
                            color="link"
                            type="submit"
                        >
                            Submit
                  </button>
                    </div>
                </form>
            </div>

        )
    }
}

export default withRouter(PostForm)