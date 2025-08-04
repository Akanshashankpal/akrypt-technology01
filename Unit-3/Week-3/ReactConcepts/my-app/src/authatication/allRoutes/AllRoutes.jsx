import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Product from '../components/Product';
import Contact from '../components/Contact';
import Login from '../components/Login';
const AllRoutes = () => {
    return (
        <div>
           <Routes>
           <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
           </Routes>
        </div>
    );
}

export default AllRoutes;
