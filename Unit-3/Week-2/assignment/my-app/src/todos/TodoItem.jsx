import React from 'react';

const TodoItem = ({id,title,status,handleToggle,handleDelete}) => {
    return (
        <div>
            <div>
                    <h1>
                        {title}-{status? "completed":"not completed"}
                    </h1>
                    <button  onClick={() => handleToggle(id)}> Toggle</button>
                    <button  onClick={() => handleDelete(id)}> Delete</button>
                </div>
        </div>
    );
}

export default TodoItem;
