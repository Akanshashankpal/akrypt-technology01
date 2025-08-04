import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../practice-routing/pages/Home';
import About from '../practice-routing/pages/Home';
import Blog from '../practice-routing/pages/Home';
import Service from '../practice-routing/pages/Home';
import Contact from '../practice-routing/pages/Home';



const WebRoutes = () => {
    return (
        <div>
            <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/blog' element={<Blog/>}></Route>
              <Route path='/service' element={<Service/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </div>
    );
}

export default WebRoutes;
