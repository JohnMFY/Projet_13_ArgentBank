import React from 'react'
import "./UserHeader.scss"

// Change h3 user name with a dynamic fetch of the name + '!'
function UserHeader() {
  return (
    <div className='userHeader'>
      <h2>Welcome back</h2>
      <h2 className='userName'>Tony Jarvis!</h2>
      <button className='btnEdit'>Edit Name</button>
    </div>
  )
}

export default UserHeader