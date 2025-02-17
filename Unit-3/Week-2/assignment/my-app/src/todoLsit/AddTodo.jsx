import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');

    const handleInputChange = (e) => setTitle(e.target.value);
  
    const handleAddClick = () => {
        addTodo(title);
        setTitle('');
    };
    return (
        <div>
           <input type="text" value={title} onChange={handleInputChange} placeholder="Add a new todo"/>
      <button onClick={handleAddClick}>ADD</button>
        </div>
    );
}

export default AddTodo;
