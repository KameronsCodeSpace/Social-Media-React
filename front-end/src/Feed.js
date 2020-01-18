import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';


class Feed extends {
    constructor(props) {
        super();
        this.state {
            post_owner: "",
            body: "",
            posts: []
        }
    }

    getPosts = async () => {
        console.log("getPosts method starting");
        let response = await axios.get(`http://localhost:3001/albums/${album_owner}`);
        console.log("response:", response);
        this.setState({
            albums: response
        });
    }


    render() {
        if (props.isAuthenticated === false) {
            return <Redirect to='/' />
        }

        let { post_owner, body, posts } = this.state;

        let feed = posts.map(element => {
            return (
                    <div className="everyPost">
                        <p className="postBody">{element}</p>
                    </div>
            );
        });

        return (
            <div>
                <div className="pageHeadersWrapper">
                    <h1>Feed</h1>
                    <h2 className="usernameHeader">{`User: ${props.currentUser.email}`}</h2>
                    <p hidden>{`Authentication: ${props.isAuthenticated}`}</p>

                    <div className="feedWrapper">

                    </div>

                </div>

            </div>
        );
    }
}

export default Feed;