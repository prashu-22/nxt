import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  const token = Cookies.get('jwt_token')

  return token !== undefined ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
