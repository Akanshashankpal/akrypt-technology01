import React, { useState } from 'react';
const UserDetails = ({ user }) => {
    // const [isFollowing, setIsFollowing] = useState(user.isFollowing);

    // const handleFollowToggle = () => {
    //     setIsFollowing(!isFollowing);
        
    // };

    return (
        <div className="user-details">
            <div className="user-image">
                <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            </div>
            <div className="user-info">

                <div className="user-name">
                    <h4>{`${user.first_name} ${user.last_name}`}</h4>
                    <p>{`${user.address}`}</p>
                </div>

                <div className="user-karma">
                    <p>{`${user.karma}`}</p>
                    <strong>Karma</strong>
                </div>

                <div className="user-follower">
                    <p>{`${user.followers}`}</p>
                    <strong>Followers</strong>
                </div>

                <div className="user-post">
                    <p>{`${user.posts}`}</p>
                    <strong>Posts</strong>
                </div>
                <button id='btn'  style={{ backgroundColor: user.is_following ? '#1E90FF' : 'transparent',
          color: user.is_following ? 'white' : 'black', border: user.is_following ?" none":"1px solid black"}}>

                    {user.is_following ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    );
};

export default UserDetails;
