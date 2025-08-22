import React, { useState, useEffect } from 'react';
import "./SignInForm.scss";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, User } from './SignInFormSlice';

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(User);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/UserPage');
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className='signInForm'>
      <i className="fa-solid fa-circle-user fa-l"></i>
      <h4>Sign In</h4>

      <form className='form' onSubmit={handleSubmit}>
        <div className='username'>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        </div>

        <div className='password'>
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </div>

        <div className='rememberMe'>
          <input type="checkbox" />
          <label className='labelRemember'>Remember me</label>
        </div>

        <button className='btn' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
