
import './App.css';
import UserDetails from './stack-msnsgement/UserDetails';
import users from './users.json'
import fiction from './fiction.json'
import nonFiction from './nonFiction.json'
import BookCard from './useState/BookCard';
import { useState } from 'react';
function App() {
  const [showNonFiction, setShowNonFiction] = useState(false); 

  const handleToggle = () => {
    setShowNonFiction(!showNonFiction); 
  };

  const booksToDisplay = showNonFiction ? nonFiction : fiction; 

  return (
    <div className="App">
      <h1>Mini Book Store</h1>
      <button onClick={handleToggle}>
        {showNonFiction ? 'Show Fiction Books' : 'Show Non Fiction Books'}
      </button>
      <div className="card-info">
        <h2>{showNonFiction ? 'Non-Fictional Books' : 'Fictional Books'}</h2>
      </div>
      <div className='cards-info'>
        {booksToDisplay.map((book) => {
          return <BookCard key={book.id} Book={book} />
        })}
      </div>

    </div>
  );
}

export default App;
