import React from 'react';

// {
//     "title": "Harry Potter and the Philosopher's Stone",
//     "author": "JK Rowling",
//     "year": "1997",
//     "price": 499,
//     "img": "https://n2.sdlcdn.com/imgs/a/4/6/Harry-Potter-And-The-Philosophers-SDL237954387-1-5e0d6.jpg"
//   },
const BookCard = ({Book}) => {
    return (
        <div id='bookCard'>
           
                <div className="card">
                    <img src={Book.img} alt="" /> <br />
                    <strong>{Book.title}( {Book.year})</strong>
                    <p>{Book.author}</p>
                    <span>{`Price :- ${Book.price} Rs/-`}</span>
                </div>
           
            
        </div>
    );
}

export default BookCard;
