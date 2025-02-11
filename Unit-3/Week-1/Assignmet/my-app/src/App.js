
import './App.css';
import UserDetails from './stack-msnsgement/UserDetails';
import users from './users.json'
import fiction from './fiction.json'
import nonFiction from './nonFiction.json'
import BookCard from './useState/BookCard';
import { useState } from 'react';
import Counter from './components/counter/counter';
import AddTodo from './components/TodoList/AddTodo';
import TodoList from './components/TodoList/TodoList';
import UserCard from './components/users/UserCard';
import Users from './components/users/Users';
function App() {
//   const [showNonFiction, setShowNonFiction] = useState(false); 

//   const handleToggle = () => {
//     setShowNonFiction(!showNonFiction); 
//   };

//   const bookShow = showNonFiction ? nonFiction : fiction; 

  return (
    // <div className="App">
    //   {/* <h1>Mini Book Store</h1>
    //   <button onClick={handleToggle}>
    //     {showNonFiction ? 'Show Fiction Books' : 'Show Non Fiction Books'}
    //   </button>
    //   <div className="card-info">
    //     <h2>{showNonFiction ? 'Non-Fictional Books' : 'Fictional Books'}</h2>
    //   </div>
    //   <div className='cards-info'>
    //     {bookShow.map((book) => {
    //       return <BookCard key={book.id} Book={book} />
    //     })}
    //   </div> */}

    // </div>

    <div className='App'>
      <div className='Count'> <Counter/></div>
     
      <div className='todo'>
      <TodoList/>
    </div>

    <div>
      <Users/>
    </div>
    </div>
    


  );
}

export default App;
