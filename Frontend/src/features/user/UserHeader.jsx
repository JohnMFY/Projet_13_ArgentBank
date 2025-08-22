import React from 'react';
import "./UserHeader.scss";
import { useSelector } from 'react-redux';
import { User } from '../auth/SignInFormSlice';

function UserHeader() {
  
  const user = useSelector(User);

  return (
    <div className='userHeader'>
      <h2>Welcome back</h2>
      {user && (
        <h2 className='userName'>
          {user.body.firstName + ' ' + user.body.lastName + ' !'}
        </h2>
      )}
      <button className='btnEdit'>Edit Name</button>
    </div>
  );
}

export default UserHeader;