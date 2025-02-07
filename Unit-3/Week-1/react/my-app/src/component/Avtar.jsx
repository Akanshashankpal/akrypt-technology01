import React from 'react';

const Avtar = ({src,name,rounded}) => {
    const image={borderRadius: rounded ? "50%": "16px",width:"200px",height:"200px"}

    const nameStyle={color:rounded? "red":"green"}
    return (
        <div style={{width:"300px",border:"1px solid black"}}>
            <img style={image} src={src} alt="" />
            <h1 style={nameStyle}>{name}</h1>
        </div>
    );
}

export default Avtar;
