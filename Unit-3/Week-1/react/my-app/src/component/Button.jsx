import React from 'react';



// const Clickme=()=>{
//     alert("click me now")
//   }
  

const Button = ({Buttontext,bgColor,color,handleClick}) => {
    // console.log(props.bgColor)
    return (
        <div>
            <button id='btn' onClick={handleClick} style={{backgroundColor:`${bgColor}` , color:`${color}`}}>{Buttontext}</button>
        </div>
    );
}

export default Button;
