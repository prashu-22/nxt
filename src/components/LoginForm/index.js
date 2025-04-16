import {useState} from 'react'
import React from 'react';
import Cookies from 'js-cookie'
import {Navigate, useNavigate} from 'react-router-dom'
import './index.css'

const LoginForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    localStorage.setItem('username', name) // ✅ Store the username
    navigate('/', {replace: true})
  }

  const onSubmitFailure = errorMessage => {
    setShowSubmitError(true)
    setErrorMsg(errorMessage)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {name, password}
    const loginApiUrl = 'https://jobbyback.onrender.com/login'

    try {
      const response = await fetch(loginApiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userDetails),
      })

      const data = await response.json()

      if (response.ok) {
        onSubmitSuccess(data.token)
      } else {
        onSubmitFailure(data.error)
      }
    } catch (error) {
      onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitForm}>
        <h1 className="auth-heading">Login</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="input-field"
            type="text"
            value={name}
            placeholder="rahul"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="input-field"
            type="password"
            value={password}
            placeholder="rahul@2021"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="btn-group">
          <button className="btn" type="submit">
            Login
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </div>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  )
}

export default LoginForm
