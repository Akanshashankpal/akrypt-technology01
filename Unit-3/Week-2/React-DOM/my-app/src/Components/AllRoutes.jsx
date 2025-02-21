import React from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';

const AllRoutes = () => {
    return (
        <div>
           <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
           </Routes>
        </div>
    );
}

export default AllRoutes;
