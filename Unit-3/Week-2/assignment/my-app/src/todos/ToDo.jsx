import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

const ToDo = () => {
    const [data, setData] = useState([]);

    const fetchTodo = () => {
        fetch('http://localhost:3000/todos')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching todos:', error));
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    const handleTodo = (text) => {
        let obj = {
           
            title: text,
            status: false,
        };

        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then((res) => res.json())
            .then((todo) => {
                setData((prevData) => [...prevData, todo]); 
            })
            .catch((error) => console.error('Error adding todo:', error));
    };

    const handleToggle = (id) => {
        let toggleArr = data.map((e) =>
            e.id === id ? { ...e, status: !e.status } : e
        );
        setData(toggleArr);
    };

    // const handleDelete = (id) => {
    //     let deleteArr = data.filter((e) => e.id !== id);
    //     setData(deleteArr);
    // };
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        })
         .then((res) => res.json())
            .then(() => {
               const newData = data.filter((todo) => todo.id !== id);
                setData(newData);
            })
            .catch((error) => console.error('Error deleting todo:', error));
    };
    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo handleTodo={handleTodo} />
            <br />
            <br />
            <br />
            <div>
                {data.map((e) => (
                    <TodoItem
                        key={e.id} // Ensure each item has a unique key
                        {...e}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDo;
