import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='container m-auto flex justify-center space-x-4 font-semibold text-xl shadow-md h-20 items-center '>
        <Link to={'/login'} className=' hover:text-yellow-300'>Login</Link>
        <Link to={'/'} className=' hover:text-yellow-300'>Home</Link>
        <Link to={'/about'} className=' hover:text-yellow-300'>About</Link>
        <Link to={'/contact'} className=' hover:text-yellow-300'>Contact</Link>
        <Link to={'/product'} className=' hover:text-yellow-300'>Product</Link>
    </div>
    );
}

export default Navbar;
