import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [count,setCount] = React.useState(10)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((pre)=>{
             if(pre==1){
                clearInterval(interval)
                console.log("count will 0")
             }
             return pre-1
            })
        },1000)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div>
            <h4>counter will : {count}</h4>
        </div>
    );
}

export default Timer;
