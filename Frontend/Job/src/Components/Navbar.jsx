import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="d-flex justify-content-between navbar navbar-light bg-light">
          <div>
              <Link className="btn btn-sm me-2" to={'/'}>React App</Link>
          </div>
          <div>
              <Link className="btn btn-outline-success me-2" to={'/login'}>Login</Link>
              <Link className="btn btn-outline-success me-2" to={'/signup'}>Signup</Link>
          </div>
      </nav>
  )
}

export default Navbar;
