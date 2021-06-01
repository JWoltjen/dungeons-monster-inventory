import React from 'react'
import {Link} from 'react-router-dom'; 

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>
                Logo
            </h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/savedmonsters'>
                    <li>
                        Saved Monsters
                    </li>
                </Link>
                <Link style={navStyle} to='/killedmonsters'>
                    <li>
                        Killed Monsters
                    </li>
                </Link>
                <li style={navStyle}>
                    Monster Kill Count
                </li>
            </ul>
        </nav>
    )
}

export default Nav
