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
            albumInputValue: "",
            secondInputValue: "",
            selectAlbum: "",
            addedMessage: ""
        }
    }
    handleAlbumsFormSubmit = (event) => {
        event.preventDefault();
        //try catch form stuff and axios
        // event listender, 
        this.addAlbum();
    }

    handleSecondFormSubmit = (event) => {
        event.preventDefault();
        //try catch form stuff and axios
        // event listender, 
        this.addImageToSpecificAlbum();
    }

    addAlbum = async () => {
        console.log("addAlbum method starting");
        let album_owner = this.props.currentUser.email;
        let album_name = this.state.album_name;
        let response = await axios.post(`http://localhost:3001/albums/`, { album_owner, album_name });
        this.setState({
            addedMessage: `Added album named "${album_name}"`
        });
    }

    addImageToSpecificAlbum = async () => {
        console.log("addImageToSpecificAlbum method starting");
        let image_owner = this.props.currentUser.email;
        let imageUrl = this.state.secondInputValue;
        let album_id = this.state.selectAlbum;
        console.log("album_id", album_id);
        let response = await axios.post(`http://localhost:3001/albums/image`, { imageUrl, image_owner, album_id });
        this.setState({
            addedMessage: `Added Image!`
        });
    }

    getAlbums = async () => {
        console.log("getAlbums method starting");
        let album_owner = this.props.currentUser.email;
        let album_name = this.state.album_name;
        let response = await axios.get(`http://localhost:3001/albums/${album_owner}`);
        console.log("response:", response.data.payload);
        this.setState({
            albums: response.data.payload
        });
    }

    handleAlbumsInputChange = (event) => {
        this.setState({
            albumInputValue: event.target.value,
            album_name: event.target.value
        });
    }

    handleSecondInputChange = (event) => {
        this.setState({
            secondInputValue: event.target.value,
        });
    }

    selectAlbum = (event) => {
        const albumID = event.target.value
        this.setState({
            selectAlbum: albumID
        });
        console.log('Current AlbumID', albumID)
    }

    populateSelect = () => {
        const { albums } = this.state;
        let albumOptions = [];
        albums.forEach((album) => {
            albumOptions.push(
                <option>{album}</option>
            )
        })
        return albumOptions;
    }

    componentDidMount() {
        console.log("component did mount")
        this.getAlbums();
    }

    render() {
        console.log("this state", this.state)

        if (this.props.isAuthenticated === false) {
            return <Redirect to='/' />
        }

        let { album_name, album_owner, albums, albumInputValue, secondInputValue, selectAlbumID, addedMessage } = this.state;

        let albumsList = albums.map(element => {
            return (
                    <Link>
                        <div className="everyAlbum">
                            <p className="albumLabel">{element.album_name}</p>
                        </div>
                    </Link>
            );
        });

        return (
            <div>
                <div>
                    <div className="pageHeadersWrapper">
                        <h1 id="albumsPageHeader">Albums</h1>
                        <h3 className="usernameHeader">{`User: ${this.props.currentUser.email}`}</h3>
                        <p hidden>{`Authentication: ${this.props.isAuthenticated}`}</p>
                    </div>

                    <h2 id="addAlbumHeader"><strong>Add a Album</strong></h2>
                    <form onSubmit={this.handleAlbumsFormSubmit}>
                        <input
                            type="text"
                            className="albumInputs"
                            placeholder=" Album Name"
                            value={this.albumInputValue}
                            onChange={this.handleAlbumsInputChange}
                        />
                        <button type="submit" className="albumButtons btn btn-success btn-circle btn-xl">Add</button>
                    </form>
                </div>

                <div>
                    <h2 id="addImageHeader"><strong>Add a Image</strong></h2>
                    <form onSubmit={this.handleSecondFormSubmit}>
                        <select id="addImageSelect" onChange={this.selectAlbum} value={selectAlbumID}>
                            <option value="">Album Name</option>
                            {
                                albums.map(album => {
                                    return <option value={album.id}>{album.album_name}</option>
                                })
                            }
                        </select>
                        <input 
                            type="text"
                            className="albumInputs"
                            placeholder=" Image URL"
                            value={this.secondInputValue}
                            onChange={this.handleSecondInputChange}
                        />
                        <button type="submit" className="albumButtons btn btn-success btn-circle btn-xl">Add</button>
                    </form>
                </div>

                <p id="addedMessageParagraph"><strong>{addedMessage}</strong></p>

                <div id="containerDivForAlbums">
                   {albumsList}
                </div>
            </div>
        );
    }
}

export default Albums;