import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./Collage_Entourage_Logo.jpg"
const Nav = (props) => {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <img alt='logo' id="logostuff" src={logo}></img>

            <ul className="nav-links">
                <Link style={navStyle} to={{
                    pathname: `/MyPosts/${props.currentUser.email}`
                }}><li>My Posts</li></Link>
                <Link style={navStyle} to='/Feed'><li><strong>Feed</strong></li></Link>
                <Link style={navStyle} to='/Albums'><li><strong>Albums</strong></li></Link>
                <Link style={navStyle} to='/Workspace'><li><strong>Workspace</strong></li></Link>
                <Link style={navStyle} to='/' onClick={props.signOut}><li><strong>Sign Out</strong></li></Link>
            </ul>
        </nav>
    );
}

export default Nav;