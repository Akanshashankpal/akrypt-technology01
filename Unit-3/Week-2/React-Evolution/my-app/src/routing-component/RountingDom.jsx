import React from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Service from './Service';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import Career from './Career';
import Users from './Users';
import UserDetail from './UserDetail';

const RountingDom = () => {
    return (
        <div>
          
         <Routes>
               <Route path='/' element={<Home/>}>  </Route>
               <Route path='/about' element={<About/>}>  </Route>
               <Route path='/blog' element={<Blog/>}>  </Route>
               <Route path='/services' element={<Service/>}>  </Route>
               <Route path='/contact' element={<Contact/>}>  </Route>
               <Route path='/career' element={<Career/>}>  </Route>
               <Route path='/user' element={<Users/>}>  </Route>
               <Route path='/user/:id' element={<UserDetail/>}>  </Route>
         </Routes>


        </div>
    );
}

export default RountingDom;
