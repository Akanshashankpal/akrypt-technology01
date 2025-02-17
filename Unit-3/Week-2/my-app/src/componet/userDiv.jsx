import React from 'react';

const UserDiv = ({id,title}) => {
    return (
        <div>
             <div key={id} className=' border-1 border-black mt-5 w-3/5 m-auto h-10 md:h-full content-center'>
              <h1 className='inline float-left ml-5 '>  {id}</h1>
              <h5 className='text-red-500'>{title}</h5>
            </div>
        </div>
    );
}

export default UserDiv;
