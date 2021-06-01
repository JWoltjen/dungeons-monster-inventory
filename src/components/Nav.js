import React from 'react'
import {Link} from 'react-router-dom'; 

function Nav() {
    return (
        <nav>
            <h3>
                Logo
            </h3>
            <ul className="nav-links">
                <Link to='/savedmonsters'>
                    <li>
                        Saved Monsters
                    </li>
                </Link>
                <Link to='/killedmonsters'>
                    <li>
                        Killed Monsters
                    </li>
                </Link>
                <li>
                    Monster Kill Count
                </li>
            </ul>
        </nav>
    )
}

export default Nav
