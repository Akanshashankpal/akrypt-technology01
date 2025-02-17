import React, { useEffect, useState } from 'react';

const Pagination = () => {
    const [count,setCount]=useState(1)


    const handleChange=(pre)=>{
      if(count<=1){
        setCount(pre)
      }
      return pre+1
    }
    
    return (
        <div>
            <button onClick={(page)=>handleChange(page-1)}>prev</button>
            <button disabled >{count}</button>
            <button onClick={(page)=>handleChange(page+1)}>next</button>
        </div>
    );
}

export default Pagination;
