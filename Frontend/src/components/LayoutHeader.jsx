import React from 'react'
import { NavLink } from "react-router";
import "./LayoutHeader.scss"

/** 
 * Add a if condition to change div 'profilConnectionHeader'
 * to change the content if the user is connected
 *  <div className='profilConnectionHeader'>
 *      <p>$UserName</p>
 *      <NavLink to={"/"}>
            <i class="fa-solid fa-right-from-bracket"></i>
            <div className='signIn'>Sign Out</div>
        </NavLink>
 * </div>
**/

function LayoutHeader() {
  return (
    <div className='layoutHeader'>
        <NavLink to={"/"}>
            <img className="logo" src=".\src\assets\argentBankLogo.png" alt="logo"/>  
        </NavLink>
        <div className='signInOut'>
            <i class="fa-solid fa-circle-user fa-l"></i>
            <div className='profilConnectionHeader'>
                <NavLink to={"/SignIn"}>
                    <div className='signIn'>Sign In</div>
                </NavLink>
            </div>
      </div>
    </div>
  )
}

export default LayoutHeader