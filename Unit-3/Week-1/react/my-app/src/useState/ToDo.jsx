import React, { useState } from 'react';

const ToDo = () => {
    const [inputValue,setInputvalue]=useState("");
    const[data,setData]=useState([]);
const handleTodo=()=>{
    let obj={
        title:inputValue,
        status:false
    }
   let newArr=[...data,obj]
   setData(newArr)
}
console.log(data)
    return (
        <div>
            <h1>Todo List</h1>

            <input type="text" value={inputValue} onChange={(e)=>{setInputvalue(e.target.value)}} />
            <br /><br />
            <button onClick={handleTodo}>Add Todo</button>
            <br />
            <br />
            <br />
            <div>
               {data.map((e)=>(
                <div>
                    <h1>
                        {e.title}-{e.status? "completed":"not completed"}
                    </h1>
                    <button>toggle</button>
                </div>
               ))}
            </div>
        </div>
    );
}

export default ToDo;
