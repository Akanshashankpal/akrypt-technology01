import React from 'react';
  
  const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} style={{height:"fit-content",marginTop:"6rem"}}>{text}</button>
    );
  }
  
  export default Button;
  