import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around'>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Blog"}>Blog</Link>
        <Link to={"/Services"}>Service</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/Career"}>Career</Link>
        <Link to={"/User"}>User</Link>

     </div>
    );
}

export default Navbar;
