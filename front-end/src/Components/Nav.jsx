import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }

    return (
<nav>
    <h3>Logo</h3>
    <ul className="nav-links">
        <Link style={navStyle} to='/Feed'><li>Feed</li></Link>
        <Link style={navStyle} to='/Albums'><li>Albums</li></Link>
        <Link style={navStyle} to='/Workspace'><li>Workspace</li></Link>
        <Link style={navStyle} to='/'><li>Sign Out</li></Link>
    </ul>
</nav>
    );
}

export default Nav;