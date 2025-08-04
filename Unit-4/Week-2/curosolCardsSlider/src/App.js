import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import { useState } from 'react';
import Mainroute from './routes/Mainroute';
function App() {
 

  return (
   <div>
    {/* <SlidePagination/> */}
   <Mainroute/>
   </div>
  );
}

export default App;
