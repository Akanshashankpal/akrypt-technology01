import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
    console.log(count)

    const [status,setStatus]=useState(false)
    const handletoggle=()=>{
        setStatus(!status)
    }

    const handleClick=()=>{
        setCount(count+1)
    }
    const handleDes=()=>{
        setCount(count-1)
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Counter System</h1>
            <h1>{count}</h1> 
            <button onClick={handleClick}>inc</button>
            <br /> <br />
            <button onClick={handleDes}>dec</button>
            <br /> <br />
            <h1>{status? "follow":"unfollow"}</h1> 

            <button onClick={handletoggle}>status</button>
        </div>
    );
}

export default Counter;
