import React from 'react';
import UserAccountCard from './UserAccountCard';
import "./UserAccounts.scss"

function UserAccounts() {
  return (
    <div className='userAccounts'>
      <UserAccountCard
        number="8349"
        money="2,082.79"
        balance="Available Balance"
      />
      <UserAccountCard
        number="6712"
        money="10,928.42"
        balance="Available Balance"
      />
      <UserAccountCard
        number="8349"
        money="184.30"
        balance="Current Balance"
      />
    </div>
  )
}

export default UserAccounts