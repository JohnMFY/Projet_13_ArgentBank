import React from 'react';
import "./UserHeader.scss";
import { useSelector } from 'react-redux';
import { User } from '../auth/SignInFormSlice';

function UserHeader() {
  
  const user = useSelector(User);

  return (
    <div className='userHeader'>
      <h2>Welcome back</h2>
      <div className='userName&btnEdit'>
        {user && (
          <h2 className='userName'>
            {user.body.firstName + ' ' + user.body.lastName + ' !'}
          </h2>
        )}
        <button className='btnEdit'>Edit Name</button>
      </div>
      <div className='editNameDiv'>
        <div className='editInputs'>
          {user && (
            <input type="text" className='firstName' placeholder={user.body.firstName}/>
          )}
          {user && (
            <input type="text" className='lastName' placeholder={user.body.lastName}/>
          )}
        </div>
        <div className='editBtn'>
          <button className='btn' type='submit'> Save </button>
          <button className='btn' type='submit'> Cancel </button>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;