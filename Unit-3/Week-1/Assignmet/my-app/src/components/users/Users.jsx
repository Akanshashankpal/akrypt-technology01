import React, { useState } from 'react';
import UserCard from './UserCard'; // Assuming you have the UserCard component
import UserData from './userData.json';


const Users = () => {

  return (
    <div className="container">
      <h1>User List</h1>
      <h3>List of Users</h3>

      <button >
        Sort by Followers
      </button>
      <button>
        Reset Sorting
      </button>

      <div className="user-list">
        {UserData.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
