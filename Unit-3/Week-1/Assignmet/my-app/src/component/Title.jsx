import React from 'react';

const Title = ({ color }) => {

    // let arr = [1, 2, 3, 4, 5];
    // const updateArr = arr.map((el) => {
    //     return(
    //         <h1>{el*2}</h1>
    //     )
    // })
    // console.log(updateArr)

    let name=[
        {
            image:"https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
            title:"gayatri",
            address:"Burhanpur",
        },
        {
            image:"https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
            title:"Harshita",
            address:"Burhanpur",
        },
        {
            image:"https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896",
            title:"Kajal",
            address:"Burhanpur",
        },

    ]
const card=name.map((el)=>{
    return(
        <div style={{border:"1px solid blue",width:"200px",margin:"auto"}}>
            <img src={el.image} alt="" style={{width:"100px",height:"100px"}}/>
            <h1>{el.title}</h1>
            <p>{el.address}</p>
        </div>
    )
})
console.log(card)
    return (
        <div>
            <h1 style={{ color: `${color}` }}>USER DISPLAY</h1>
            {/* <p>{updateArr}</p> */}
            <div>{card}</div>
        </div>
    );
}

export default Title;
