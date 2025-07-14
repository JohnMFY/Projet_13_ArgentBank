import React from 'react'
import UserHeader from '../components/UserHeader'
import UserAccounts from '../components/UserAccounts'
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