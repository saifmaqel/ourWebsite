import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import MegaMenu from './MegaMenu'
const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className='container'>
        <Link to='/'>
          <b>
            <h1 className='logo' style={{ margin: '0' }}>
              Company
            </h1>
          </b>
        </Link>
        <ul>
          <li>
            <Link to='/productsandservices'>
              <h4>Products And Services</h4>
            </Link>
          </li>
          <li>
            <Link to='/careers'>
              <h4>Careers</h4>
            </Link>
          </li>
          <li>
            <Link to='/company'>
              <h4>Company</h4>
            </Link>
          </li>
          <li>
            <a href='#'>
              <h4 onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}>
                Other Links
              </h4>
            </a>
            {isMegaMenuOpen && <MegaMenu />}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
