import React from 'react'
import UserHeader from '../features/user/UserHeader'
import UserAccounts from '../features/user/UserAccounts'
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