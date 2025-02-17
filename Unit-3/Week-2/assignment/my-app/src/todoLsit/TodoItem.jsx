import React from 'react';

const TodoItem = ({ todo, toggleStatus, deleteTodo }) => {
    const { id, title, status } = todo;

    return (
        <div>
            <li className='wrapper'>
                <p>{title} - {status ? 'Completed' : 'Not Completed'}</p>
                <button onClick={() => toggleStatus(id)}>TOGGLE</button>
                <button onClick={() => deleteTodo(id)}>DELETE</button>
            </li>
        </div>
    );
}

export default TodoItem;
