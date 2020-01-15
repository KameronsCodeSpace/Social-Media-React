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
                <Link style={navStyle} to='/Feed'><li>Feed</li></Link>
                <Link style={navStyle} to='/Albums'><li>Albums</li></Link>
                <Link style={navStyle} to='/Workspace'><li>Workspace</li></Link>
                <Link style={navStyle} to='/' onClick={props.signOut}><li>Sign Out</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;