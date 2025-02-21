import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around border-none h-15 text-lg  font-semibold  w-100 m-auto bg-white shadow-md p-4 space-y-4'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/product'}>Product</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    );
}

export default Navbar;
