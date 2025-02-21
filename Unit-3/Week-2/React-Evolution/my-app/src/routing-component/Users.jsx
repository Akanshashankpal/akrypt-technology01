import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [data,setData]=useState([])
    const fetchData=()=>{
        fetch(`https://reqres.in/api/users`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setData(data.data)
        })
    }

   useEffect(() => {
    
   fetchData()
   }, []);


    return (
        <div>
            <h1 className='font-bold text-lg'>Users</h1>

            {
                data.map((e)=>(
                    <div key={e.id} className='w-80 h-60 border m-auto '>
                        <h5>{e.id}</h5>
                        <h1>{e.first_name}</h1>
                        <img src={e.avatar} alt="" className='m-auto'/>
                        <h2>{e.email}</h2>
                    <Link to={`/user/${e.id}`} > More Information</Link>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;
