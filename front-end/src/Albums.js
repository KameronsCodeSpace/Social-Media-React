import React from 'react';
import './App.css';

function Albums() {
    return (
        <div>
            <h1 id="albumsPageHeader">Albums Page</h1>
            <div id="addAlbumButtonDiv">
                <button type="button" id="addAlbum" class="btn btn-success btn-circle btn-xl">Add</button> 
            </div>
        </div>
    );
}

export default Albums;