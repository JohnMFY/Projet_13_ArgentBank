import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserHeader from '../features/user/UserHeader'
import UserAccounts from '../features/user/UserAccounts'
import "./UserPage.scss"

function UserPage() {
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <div className='userPage'>
      <UserHeader />
      <UserAccounts />
    </div>
  )
}

export default UserPage
