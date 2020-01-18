import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <img alt='logo' id="logostuff" src='https://media.giphy.com/media/9zXGh4BXE0XvkrnSd9/giphy.gif'></img>

            <ul className="nav-links">
                <Link style={navStyle} to='/Feed'><li><strong>Feed</strong></li></Link>
                <Link style={navStyle} to='/Albums'><li><strong>Albums</strong></li></Link>
                <Link style={navStyle} to='/Workspace'><li><strong>Workspace</strong></li></Link>
                <Link style={navStyle} to='/' onClick={props.signOut}><li><strong>Sign Out</strong></li></Link>
            </ul>
        </nav>
    );
}

export default Nav;