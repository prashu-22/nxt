// import React from 'react'
// import {
//   FaSearch,
//   FaHeart,
//   FaShoppingBag,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from 'react-icons/fa'
// import {Link, useNavigate, useLocation} from 'react-router-dom'
// import Cookies from 'js-cookie'
// import {useWishlist} from '../../context/WishlistContext'
// import './index.css'

// function Header() {
//   const [menuOpen, setMenuOpen] = React.useState(false)
//   const [showSearch, setShowSearch] = React.useState(false)
//   const [searchTerm, setSearchTerm] = React.useState('')
//   const navigate = useNavigate()
//   const {wishlist} = useWishlist()
//   const location = useLocation()

//   const handleLogout = () => {
//     Cookies.remove('jwt_token')
//     navigate('/login')
//   }

//   const handleSearchSubmit = (e) => {
//     e.preventDefault()
//     if (searchTerm.trim()) {
//       navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`)
//     }
//   }

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo-section">
//           <span className="logo-text">
//             <Link to="/products" onClick={() => setMenuOpen(false)}>
//               <img
//                 className="website-logo"
//                 src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//                 alt="website logo"
//               />
//             </Link>
//           </span>
//         </div>

//         <button
//           className="hamburger"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
//           <Link to="/products" onClick={() => setMenuOpen(false)}>
//             SHOP
//           </Link>
//           <Link to="/cart" onClick={() => setMenuOpen(false)}>
//             CART
//           </Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>
//             ABOUT
//           </Link>
//           <button className="logout-btn mobile-only" onClick={handleLogout}>
//             Logout
//           </button>
//         </nav>

//         <div className="icon-section">
//           <FaSearch className="icon" onClick={() => setShowSearch(!showSearch)} />
//           {showSearch && (
//             <form onSubmit={handleSearchSubmit} className="search-form">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </form>
//           )}

//           <Link to="/wishlist">
//             <FaHeart className="icon" />
//             {wishlist.length > 0 && (
//               <span className="wishlist-count">{wishlist.length}</span>
//             )}
//           </Link>
//           <FaShoppingBag className="icon" />
//           <FaUser className="icon" />
//           <div className="language">
//             ENG <span className="arrow">⌄</span>
//           </div>
//           <button className="logout-btn desktop-only" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

import React from 'react'

import {
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useWishlist} from '../../context/WishlistContext'
import './index.css'

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const {wishlist} = useWishlist()

  // Update URL whenever searchTerm changes
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const trimmedSearch = searchTerm.trim()
      const currentPath = location.pathname
      if (currentPath.includes('/products')) {
        navigate(`/products?search=${encodeURIComponent(trimmedSearch)}`)
      }
    }, 300) // Debounce: waits 300ms before updating URL

    return () => clearTimeout(timer)
  }, [searchTerm, navigate, location.pathname])

  // Sync searchTerm with current URL (when revisiting /products?search=something)
  React.useEffect(() => {
    const params = new URLSearchParams(location.search)
    const search = params.get('search') || ''
    setSearchTerm(search)
  }, [location.search])

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <span className="logo-text">
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
              />
            </Link>
          </span>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/products" onClick={() => setMenuOpen(false)}>SHOP</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>CART</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
          <button className="logout-btn mobile-only" onClick={handleLogout}>Logout</button>
        </nav>

        <div className="icon-section">
          <FaSearch className="icon" onClick={() => setShowSearch(!showSearch)} />
          {showSearch && (
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="search-input"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          )}

          <Link to="/wishlist">
            <FaHeart className="icon" />
            {wishlist.length > 0 && <span className="wishlist-count">{wishlist.length}</span>}
          </Link>
         <Link to="/cart"><FaShoppingBag className="icon" /></Link>
          <Link to="/profile"><FaUser className="icon" /></Link>
          <div className="language">ENG <span className="arrow">⌄</span></div>
          <button className="logout-btn desktop-only" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
}

export default Header
