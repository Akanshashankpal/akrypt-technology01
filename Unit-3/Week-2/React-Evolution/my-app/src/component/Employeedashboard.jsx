import React, { useEffect, useState } from 'react';
import Pagination from './pagination';

const Employeedashboard = () => {
    const [data,setData] =useState([])
    const [limit,setLimit]=useState(10)
    const [page,setPage]=useState(1)
    
    const [count,setCount]=useState(1)


    const handleChange=(pre)=>{
      if(count<=1){
        setCount(pre)
      }
      return pre+1
    }
    const fetchData=()=>{
        fetch (`http://localhost:3000/data?_limit=${limit}&%page=${page}`)
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            setData(response)
        })
    }
    useEffect(()=>{
        fetchData(data)
        // setLimit(data)
        // setPage(data)
    },[])
    return (
        <div >
            
                <table className='m-auto border-1 w-full table-auto'>
                    <thead className='border-1'>
                        <tr className='border-1' >
                        <td className='border-1'>SN No.</td>

                            <td className='border-1'>Name</td>
                            <td className='border-1'>Department</td>
                            <td className='border-1'>Image</td>
                            <td className='border-1'>Gender</td>
                            <td className='border-1'>Salary</td>
                            </tr>
                    </thead>
                    <tbody className='border-1' >
                        
                            {
                                data.map((el,ind)=>(
                                    <tr className='border-1' key={el.id}>
                                    <td className='border-1'>{ind+1}</td>

                                    <td className='border-1'>{el.name}</td>
                                   <td className='border-1'>{el.department}</td>
                                   <td className='border-1'>{el.image}</td>
                                   <td className='border-1'>{el.gender}</td>
                                   <td className='border-1'>{el.salary}</td>
                                   </tr>
                                ))
                            }
                       
                    </tbody>
                </table>
             <div>
                <button onClick={(page)=>handleChange(page-1)}>prev</button>
                <button>{count}</button>
                <button onClick={(page)=>handleChange(page+1)}>next</button>
             </div>
        </div>
    );
}

export default Employeedashboard;

