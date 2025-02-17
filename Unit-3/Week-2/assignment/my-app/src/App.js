import logo from './logo.svg';
import './App.css';
import Timer from './counter Component/Timer';
import { useState } from 'react';
import TodoList from './todoLsit/TodoList';
import ToDo from './todos/ToDo';

function App() {
  // const[status,setStatus]=useState(true)
  // const [show,setShow]=useState(false)
  // const toggleStatus = () => {
  //   setStatus(!status);
  //   setShow(!show);
  // };
  return (
    <div className="App">
      {/* <h1>Counter Timer</h1>
     {
     status && <Timer/>
     }
     <button onClick={toggleStatus}>{show ? "show Timer":"hide Timer"}</button> */}
   <ToDo/>
     
    </div>
  );
}

export default App;
