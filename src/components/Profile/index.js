import React from 'react'
import Header from '../Header'
import './index.css'

const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

const Profile = () => {
  const username = localStorage.getItem('username') || 'Guest'
  const firstNameRaw = username.split(' ')[0] || 'Guest'
  const firstName = capitalize(firstNameRaw)
  const avatarName = firstName === 'Guest' ? 'User' : firstName

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-card">
          <img
            src={`https://ui-avatars.com/api/?name=${avatarName}&background=random`}
            alt="profile"
            className="profile-avatar"
          />
          <h2 className="profile-name">Hello, {firstName}!</h2>
          <p className="profile-info">Welcome to your profile page.</p>
        </div>
      </div>
    </>
  )
}

export default Profile
