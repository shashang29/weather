import { Link } from 'react-router-dom';
import '../App.css'

import React from 'react';

const Nav = () => {
    return (
        <nav className='shadow-3'>
            <Link to='/' className='logo nav-links'>
                <div>WEATHER</div>
            </Link>
            <Link to='/weathermap' className='nav-links'>
                <div>Map</div>
            </Link>
            <Link to='/About' className='nav-links'>
                <div>About</div>
            </Link>




        </nav>
    )
}

export default Nav;