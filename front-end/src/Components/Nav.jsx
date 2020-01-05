import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
<nav>
    <h3>Logo</h3>
    <ul className="nav-links">
        <Link to='/Feed'><li>Feed</li></Link>
        <Link to='/Albums'><li>Albums</li></Link>
        <Link to='/Workspace'><li>Workspace</li></Link>
        <Link to='/'><li>Sign Out</li></Link>
        
    </ul>
</nav>
    );
}

export default Nav;