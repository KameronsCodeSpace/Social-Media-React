import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Albums extends Component {
    constructor() {
        super()
        this.state = {
            albumName: '',
            album_owner: '',
            numberOfAlbums: 'Works',
            albumInputValue: ""
        }
    }
    handleAlbumsFormSubmit = (event) => {
        event.preventDefault();
        //try catch form stuff and axios
    }

    addAlbum = async () => {
        //similair to handleAlbumsFormSubmit
        let album_owner = this.state.album_owner;
        let album_name = this.state.album_name;
        let response = await axios.post(`http://localhost:3000/albums/`, { album_owner, album_name });
        console.log(response)
    }

    handleAlbumsInputChange = (event) => {
        this.setState({
            albumInputValue: event.target.value
        });
    }
    render() {
        // const { currentUser } = this.props

        // console.log('Checking User', currentUser)
        // const loggedInUser = currentUser;
        // const numberOfAlbums = this.numberOfAlbums;


        return (
            <div>
                <div>
                    <h1 id="albumsPageHeader">Albums Page</h1>
                    <p>{`This is the User: ${this.props.currentUser.user.email}`}</p>
                    <p>{`Number of albums: ${this.state.numberOfAlbums}`}</p>

                    <form>
                        <input
                            type="text"
                            id="albumNameInput"
                            placeholder="Album Name"
                            value={this.albumInputValue}
                            onChange={this.handleAlbumsFormSubmit}
                        />
                        <button type="button" id="addAlbumButton" className="btn btn-success btn-circle btn-xl">Add</button>
                    </form>
                </div>

                <div>

                </div>
            </div>
        );
    }
}

export default Albums;