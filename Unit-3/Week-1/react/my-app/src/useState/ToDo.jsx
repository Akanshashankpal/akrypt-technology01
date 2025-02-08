import React, { useState } from 'react';

const ToDo = () => {
    const [inputValue,setInputvalue]=useState("");
    const [id,setId]=useState(1)
    const[data,setData]=useState([]);
const handleTodo=()=>{
    let obj={
        id:id,
        title:inputValue,
        status:false
    }
   let newArr=[...data,obj]
   setData(newArr)
   setId(id+1)
   setInputvalue("")
}
console.log(data)


// const handleToggle = (id) => {
//     let toggleArr=data.map((e)=>{
//         if(e.id==id){
//             return{
//                 ...e,
//                 status:!e.status
//             }
//         }else{
//             return{
//                 ...e
//             }
//         }
//     })
//     setData(toggleArr)
// };



const handleToggle = (id) => {
    let toggleArr=data.map((e)=>e.id==id ? {...e,status:!e.status}:e)
    setData(toggleArr)
};




// const handleDelete = (id) => {
//     let DeleteArr=data.filter((e)=>{
//         if(e.id==id){
//             return(false)
//         }else{
//             return(true)
//         }

//     })
//     setData(DeleteArr)
// }

const handleDelete = (id) => {
        let DeleteArr=data.filter((e)=>e.id!=id)
        setData(DeleteArr)
    }


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
                <div >
                    <h1>
                        {e.title}-{e.status? "completed":"not completed"}
                    </h1>
                    <button  onClick={() => handleToggle(e.id)}> Toggle</button>
                    <button  onClick={() => handleDelete(e.id)}> Delete</button>
                </div>
               ))}
            </div>
        </div>
    );
}

export default ToDo;
