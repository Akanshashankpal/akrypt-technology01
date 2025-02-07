import React from 'react';

const Stack = () => {
    let arr=[1,2,3,4,5]
    const updatedArr=arr.map((el)=>{el*2})
    console.log(updatedArr)
    return (

        <div>
            {updatedArr}
        </div>
    );
}

export default Stack;
