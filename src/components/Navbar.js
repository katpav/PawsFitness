import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoBarbellOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <IoBarbellOutline />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <IoCloseOutline/> : <IoMenuOutline/>}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/training_programs" className="nav-links" onClick={closeMobileMenu}>
                Training
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nutrition_plan" className="nav-links" onClick={closeMobileMenu}>
                Nutrition
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-links-mobile" onClick={closeMobileMenu}>
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">REG</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
