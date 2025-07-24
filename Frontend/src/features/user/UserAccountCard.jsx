import React from 'react'
import "./UserAccountCard.scss"

function UserAccountCard(props) {
  return (
    <div className='userAccountCard'>
      <div className='moneyDiv'>
        <p>Argent Bank Checking (x{props.number})</p>
        <h1>${props.money}</h1>
        <p>{props.balance}</p>
      </div>
      <div className='cardRight'>
        <button className='btnTransaction'>View transactions</button>
      </div>
    </div>
  )
}

export default UserAccountCard