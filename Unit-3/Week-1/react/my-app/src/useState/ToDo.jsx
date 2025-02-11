import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const ToDo = () => {
    const [id,setId]=useState(1)
    const[data,setData]=useState([]);
const handleTodo=(text)=>{
    let obj={
        id:id,
        title:text,
        status:false
    }
   let newArr=[...data,obj]
   setData(newArr)
   setId(id+1)
}
console.log(data)

const handleToggle = (id) => {
    let toggleArr=data.map((e)=>e.id==id ? {...e,status:!e.status}:e)
    setData(toggleArr)
};

const handleDelete = (id) => {
        let DeleteArr=data.filter((e)=>e.id!=id)
        setData(DeleteArr)
    }


    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo handleTodo={handleTodo} />
            <br />
            <br />
            <br />
            <div>
               {data.map((e)=>(
                <TodoItem  {...e} handleToggle={handleToggle} handleDelete={handleDelete}/>
               ))}
            </div>
        </div>
    );
}

export default ToDo;
