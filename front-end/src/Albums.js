import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class Albums extends Component {
    constructor() {
        super();
        this.state = {
            numberOfAlbums: [],
            albumInputValue: ""
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
    }

    handleUsernameChange = (event) => {
        this.setState({
        albumInputValue: event.target.value
        });
    }

    addAlbum = async () => {
        let album_owner;
        let album_name = this.state.album_name;
        let response = await axios.post(`http://localhost:3000/albums/`, { album_owner, album_name });
    }

    render() {
        const { albumInputValue } = this.state;
        return (
            <div>
                <div>
                    <h1 id="albumsPageHeader">Albums Page</h1>
                    <form onSubmit="">
                        <input 
                            id="albumNameInput" 
                            placeholder="Album Name" 
                            value={albumInputValue}
                            onChange={this.albumInputValue}
                        />
                        <button type="button" id="addAlbumButton" class="btn btn-success btn-circle btn-xl">Add</button> 
                    </form>
                </div>

                <div>

                </div>
            </div>
        );
    }
}

export default Albums;

// state, handlers for input, handle click, form submit