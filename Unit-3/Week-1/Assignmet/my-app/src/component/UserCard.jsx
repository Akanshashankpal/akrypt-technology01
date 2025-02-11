import React from 'react';

const UserCard = ({src,borderRadius,name,post,follower}) => {
    return (
        <div style={{border:"1px solid black",height:"300px",width:"600px",margin:"auto"}}>
            <img style={{width:"200px",height:"200px",borderRadius:`${borderRadius}`,
            marginLeft:"20px",float:"left",marginTop:"20px"}} src={src} alt="" />
            <h2>{name}</h2>
            <h3>Post <br />{post}</h3>
            <h3>Followers <br />{follower}</h3>
            <button id='btn'>Follow</button>
        </div>
    );
}

export default UserCard;
