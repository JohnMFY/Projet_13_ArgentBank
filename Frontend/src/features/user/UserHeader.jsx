import { React, useState, useEffect } from 'react';
import "./UserHeader.scss";
import { useSelector, useDispatch } from 'react-redux';
import { User, updateUserProfile} from '../../api/userSlice';

function UserHeader() {
  
  const user = useSelector(User);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.body?.firstName || '');
  const [lastName, setLastName] = useState(user?.body?.lastName || '');


  useEffect(() => {
    if (user?.body) {
      setFirstName(user.body.firstName);
      setLastName(user.body.lastName);
    }
  }, [user]);
  const save = () => {
    dispatch(updateUserProfile({ firstName, lastName }))
      .then(() => setIsEditing(false));
  };
  const cancel = () => {
    setFirstName(user?.body?.firstName || '');
    setLastName(user?.body?.lastName || '');
    setIsEditing(false);
  };

  return (
    <div className='userHeader'>

      <h2>Welcome back</h2>

      {!isEditing && (
        <div className='userName&btnEdit'>
            <h2 className='userName'>
              {firstName + ' ' + lastName + ' !'}
            </h2>
          <button className='btnEdit'onClick={() => setIsEditing(true)}>Edit Name</button>
        </div>
      )}

      {isEditing && (
        <div className='editNameDiv'>
          <div className='editInputs'>
            <input type="text" className='firstName' placeholder={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" className='lastName' placeholder={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div className='editBtn'>
            <button className='btn' type='submit' onClick={save}> Save </button>
            <button className='btn' type='button' onClick={cancel}> Cancel </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default UserHeader;