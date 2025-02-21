import React, { useState } from 'react';


const coffeeMenu = [
    { id: 1, name: "Black", price: 140, image: "black.jpg" },
    { id: 2, name: "Latte", price: 180, image: "latte.jpg" },
    { id: 3, name: "Cappuccino", price: 230, image: "cappuccino.jpg" },
    { id: 4, name: "Americano", price: 400, image: "americano.jpg" },
    { id: 5, name: "Espresso", price: 450, image: "espresso.jpg" },
    { id: 6, name: "Doppio", price: 200, image: "doppio.jpg" },
  ];
const Cards = () => {
    const [orders, setOrders] = useState({});
      
    const placeOrder = (id) => {
      setOrders({ ...orders, [id]: true });
    };
  
    const cancelOrder = (id) => {
      setOrders({ ...orders, [id]: false });
    };
    return (
        <div>
            <div>
                {
                    coffeeMenu.map((el)=>(
                        <div>
                           <img src={el.image} alt="image1"  />
                            <h4>{el.name}</h4>
                            <p>$ {el.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;
