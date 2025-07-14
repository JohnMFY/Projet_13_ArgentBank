import React from 'react'
import"./SignInForm.scss"
import { useNavigate } from 'react-router-dom';

function SignInForm() {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); 

    navigate('/UserPage');
  };

  return (
    <div className='signInForm'>
      <i class="fa-solid fa-circle-user fa-l"></i>
      <h4>Sign In</h4>
      <form className='form' onSubmit={handleSubmit}>
        <div className='username'>
          <label>Username</label>
          <input type="text"/>
        </div>
        <div className='password'>
          <label>Password</label>
          <input type="password"/>
        </div>
        <div className='rememberMe'>
          <input type="checkbox"/>
          <label className='labelRemember'>Remember me</label>
        </div>
        <button className='btn' type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default SignInForm