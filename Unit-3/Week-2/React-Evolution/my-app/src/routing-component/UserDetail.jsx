import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {id}=useParams();
    const [userData,setuserData]=useState({})

    const [data,setData]=useState([])
        const fetchData=(id)=>{
            fetch(`https://reqres.in/api/users/${id}`)
            .then((response)=>response.json())
            .then((data)=>{
                console.log(data)
                setData(data.data)
                setuserData(data.data)
            })
        }
    
       useEffect(() => {
        
       fetchData(id)
       }, [id]);
    console.log(data)
    return (
        <div>
            <h1 className='font-bold text-lg'>UserDetails</h1>
            <div key={userData.id} className='w-80 h-60 border m-auto '>
                        <h5>{userData.id}</h5>
                        <h1>{userData.first_name}</h1>
                        <img src={userData.avatar} alt="" className='m-auto'/>
                        <h2>{userData.email}</h2>
                    </div>
        </div>
    );
}

export default UserDetail;
