import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    const navStyle = {
        color: 'white'
    }
    // console.log('Props', props.props.signOut)
    // console.log('Props Check', props)



    return (
        <nav>
            <h3>Logo</h3>
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