import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)

    const increment=()=>{
       if(count<10){
        setCount(count+1)
       }
    }
    const decrement=()=>{
        if(count>0){
         setCount(count-1)
        }
     }
     const reset=()=>{
        setCount(0)
     }
    return (
        <div id='counter'>
            <h1>Count :- {count}</h1>
            <button onClick={increment}>INC</button>
            <button onClick={decrement}>DEC</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
