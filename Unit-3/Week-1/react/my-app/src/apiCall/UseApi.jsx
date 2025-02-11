import React, { useState } from 'react';

const UseApi = () => {
const [mainData,setMaindata]=useState([])
    const [loding,setLoding]=useState(false)
    const fetchData=()=>{
        setLoding(true)
        fetch("https://dummyjson.com/users")
        .then((response)=>
             response.json())
         .then((res)=>{
            console.log(res.users);
            setMaindata(res.users);
            setLoding(false)
         })
         .catch((err)=>{
            console.log(err)
         })
    }
console.log(mainData)
    if(loding){
        return <h1>...Loding</h1>
    }
    return (
        <div>
            <h1>Api Call</h1>
            <button onClick={fetchData}>Get Data</button>

            {
            mainData.map((e)=>(
                <div>
               <h1>{e.firstName} {e.lastName}</h1>
                </div>
            ))
        }
        </div>

       
    );
}

export default UseApi;
