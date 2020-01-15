import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Albums extends Component {
    constructor(props) {
        super()
        this.state = {
            album_name: '',
            album_owner: '',
            albums: [],
            albumInputValue: ""
        }
    }
    handleAlbumsFormSubmit = (event) => {
        event.preventDefault();
        //try catch form stuff and axios
        // event listender, 
        this.addAlbum();

    }

    addAlbum = async () => {
        //similair to handleAlbumsFormSubmit
        console.log("addAlbum method starting");
        let album_owner = this.props.currentUser.email;
        let album_name = this.state.album_name;
        let response = await axios.post(`http://localhost:3001/albums/`, { album_owner, album_name });
        console.log("response:", response) //save res to state and should be a obj reperesneting a album, , array to keep albums
    }

    getAlbums = async () => {
        console.log("getAlbums method starting");
        let album_owner = this.props.currentUser.email;
        let album_name = this.state.album_name;
        let response = await axios.get(`http://localhost:3001/albums/${album_owner}`);
        console.log("response:", response.data.payload);
        this.setState({
            albums: response.data.payload
        })
    }

    handleAlbumsInputChange = (event) => {
        this.setState({
            albumInputValue: event.target.value,
            album_name: event.target.value
        });
    }

    componentDidMount() {
        console.log("component did mount")
        this.getAlbums()
    }

    render() {
        console.log("render")
        // const { currentUser } = this.props

        // console.log('Checking User', currentUser)
        // const loggedInUser = currentUser;
        // const numberOfAlbums = this.numberOfAlbums;

        if (this.props.isAuthenticated === false) {
            return <Redirect to='/' />
        }

        let { album_name, album_owner, albums, albumInputValue } = this.state;

        let albumsList = albums.map(element => {
            return (
                    <Link>
                        <div className="everyAlbum">
                            <p>{element.album_name}</p>
                        </div>
                    </Link>
            );
        });

        return (
            <div>
                <div>
                    <h1 id="albumsPageHeader">Albums Page</h1>
                    <p>{`This is the User: ${this.props.currentUser.email}`}</p>
                    <p>{`Authentication: ${this.props.isAuthenticated}`}</p>


                    <form onSubmit={this.handleAlbumsFormSubmit}>
                        <input
                            type="text"
                            id="albumNameInput"
                            placeholder="Album Name"
                            value={this.albumInputValue}
                            onChange={this.handleAlbumsInputChange}
                        />
                        <button type="submit" id="addAlbumButton" className="btn btn-success btn-circle btn-xl">Add</button>
                    </form>
                </div>

                <div id="containerDivForAlbums">
                   {albumsList}
                </div>
            </div>
        );
    }
}

export default Albums;