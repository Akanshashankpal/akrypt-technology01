import React, { useState } from 'react';
import Button from './Button';
// "id": 1,
//       "name": "Chrisse",
//       "address": "4018 Sachs Trail",
//       "avatar": "https://placehold.co/200",
//      " posts": 1841,
//       "followers": 66868,
//       "isMarried": true
//     },
const UserCard = ({ name, address, avatar, posts, followers, isMarried }) => {

    const handleFollowClick = () => {
        alert(`You are now following ${name}`);
    };

    return (
        <div className="user-card">
            <div> <img style={{borderRadius:'50%',marginTop:"15px"}} src={avatar} alt={`${name}'s avatar`} /></div>
            <div className='main-content'>
                <div>
                    <h2>{name}</h2>
                    <p>{address}</p>
                </div>
                <div className='pfm'>
                    <h3>Posts <br /><p>{posts}</p></h3>
                    <h3>Followers <br /> <p>{followers}</p></h3> 
                    
                    <h3>Married <br /> <p>{isMarried ? 'Yes' : 'No'}</p></h3><br />
                </div>

            </div>

            <Button text="Follow" onClick={handleFollowClick} />
        </div>
    );
};

export default UserCard;
