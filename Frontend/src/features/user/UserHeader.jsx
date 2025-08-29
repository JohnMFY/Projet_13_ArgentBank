import { React, useState } from 'react';
import "./UserHeader.scss";
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../auth/SignInFormSlice';
import { updateUserProfile } from './UserHeaderSlice';

function UserHeader() {
  
  const user = useSelector(User);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.body.firstName);
  const [lastName, setLastName] = useState(user?.body.lastName);

  const save = () => {
    dispatch(updateUserProfile({ firstName, lastName }))
      .then(() => {
        setIsEditing(false);
      })
  };

  return (
    <div className='userHeader'>

      <h2>Welcome back</h2>

      {!isEditing && (
        <div className='userName&btnEdit'>
          {user && (
            <h2 className='userName'>
              {user.body.firstName + ' ' + user.body.lastName + ' !'}
            </h2>
          )}
          <button className='btnEdit'onClick={() => setIsEditing(true)}>Edit Name</button>
        </div>
      )}

      {isEditing && (
        <div className='editNameDiv'>
          <div className='editInputs'>
            {user && (
              <input type="text" className='firstName' placeholder={user.body.firstName} onChange={(e) => setFirstName(e.target.value)}/>
            )}
            {user && (
              <input type="text" className='lastName' placeholder={user.body.lastName} onChange={(e) => setLastName(e.target.value)}/>
            )}
          </div>
          <div className='editBtn'>
            <button className='btn' type='submit' onClick={save}> Save </button>
            <button className='btn' type='submit' onClick={() => setIsEditing(false)}> Cancel </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default UserHeader;