import {Routes,renderMatches, Route, Navigate} from 'react-router-dom'
import React from 'react';

import LoginForm from './components/LoginForm'
import Signup from './components/Signup'
import Home from './components/Home'
import Footer from './components/Footer'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import WishlistPage from './components/WishlistPage'
import Profile from './components/Profile'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/login" element={<LoginForm />} />
    <Route path="/signup" element={<Signup />} />

    {/* Protected routes */}
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/about" element={<Footer />} />
      <Route path="/profile" element={<Profile />} />
    </Route>

    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" replace />} />
  </Routes>
)

export default App
