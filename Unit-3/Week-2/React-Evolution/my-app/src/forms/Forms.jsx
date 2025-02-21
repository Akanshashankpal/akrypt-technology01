import React, { useState } from 'react';


const Forms = () => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [formData,setFormdata]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("submit")
        const obj={
            username,
            password
        }
    setFormdata([...formData,obj])

    }
console.log(formData)
    return (
        <div>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='UserName' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <br />
                <br />
                <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <br />
                <button type="submit">submit</button>
            </form>
           
           {
            formData.map((e)=>(
                <div>
                    <h1>{e.username}</h1>
                    <h4>{e.password}</h4>
                </div>
            ))
           }
        </div>
    );
}

export default Forms;
