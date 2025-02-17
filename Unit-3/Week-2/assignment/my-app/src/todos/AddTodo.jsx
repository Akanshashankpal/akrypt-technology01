import React, { useState } from 'react';

const AddTodo = ({handleTodo}) => {
        const [inputValue,setInputvalue]=useState("");
    //   const handleAddtodo=()=>{
    //     handleTodo(inputValue)
    //   }
    return (
        <div>
             <input type="text" value={inputValue} onChange={(e)=>{setInputvalue(e.target.value)}} />
            <br /><br />
            <button onClick={()=>{handleTodo(inputValue)}}>Add Todo</button>
        </div>
    );
}

export default AddTodo;
