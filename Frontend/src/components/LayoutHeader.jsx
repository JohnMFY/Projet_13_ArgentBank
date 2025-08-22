import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./LayoutHeader.scss";
import { useSelector, useDispatch } from 'react-redux';
import { User, logout } from '../features/auth/SignInFormSlice';

function LayoutHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(User);

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='layoutHeader'>
      <NavLink to={"/"}>
        <img className="logo" src=".\src\assets\argentBankLogo.png" alt="logo" />  
      </NavLink>

      <div className='signInOut'>
        <i className="fa-solid fa-circle-user fa-l"></i>
        {user ? (
          <div className='profilConnectionHeader'>
            <NavLink to={"UserPage"}>
              <p>{user.body.firstName+' '+user.body.lastName}</p>
            </NavLink>
            <span>
              <button onClick={handleSignOut} className="signOutBtn">
                <div className='signIn'>Sign Out</div>
              </button>
            </span>
          </div>
        ) : (
          <div className='profilConnectionHeader'>
            <NavLink to={"/SignIn"}>
              <div className='signIn'>Sign In</div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default LayoutHeader;
