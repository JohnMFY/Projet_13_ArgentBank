import React from 'react'
import UserHeader from '../Components/UserHeader'
import UserAccounts from '../Components/UserAccounts'
import "./UserPage.scss"

function UserPage() {
  return (
    <div className='userPage'>
      <UserHeader/>
      <UserAccounts/>
    </div>
  )
}

export default UserPage