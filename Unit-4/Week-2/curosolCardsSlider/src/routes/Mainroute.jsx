import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import NewDashboard from '../pages/Dashboard/main/NewDashboard';
import { Riple } from 'react-loading-indicators';
import NewLogin from '../pages/SignIn/NewLogin';

const Mainroute = () => {
  
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
          setLoading(false);
      }, 1000); // Adjust timeout as needed

      return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
     {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <Riple color="#FF782D" size="medium" text="" textColor="" />
          </div>
        )}
    <Routes>

        {/* <Route path='/' element={<NewLogin />}/> */}
        {/* <Route path='/login' element={<NewLogin/>}/> */}
        <Route path='/dash/*' element={<NewDashboard/>}/>

    </Routes>
    </>
  );
};

export default Mainroute;

