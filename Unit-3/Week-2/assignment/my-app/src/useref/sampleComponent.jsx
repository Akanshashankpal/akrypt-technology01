import React, { useRef, useState } from 'react';

const SampleComponent = () => {
    const [count,setCount]=useState(0)
    //  const ref=useRef(0)
const inputRef=useRef(null)
    const handlechange=()=>{
        // setCount(count+1)
        // ref.current=ref.current+1
        inputRef.current.focus()
    }
//    console.log(ref)
   return (
        <div>
            <h1>concept of useref </h1>

            {/* <h4 >counter :- {count}</h4>

            <h4>useref :- {ref.current} </h4> */}
            <input type="text" ref={inputRef} />
            <button onClick={handlechange}>count</button>


        </div>
    );
}

export default SampleComponent;
