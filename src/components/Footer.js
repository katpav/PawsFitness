import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>Contacts</h2>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div className="footer-link-items">
          <h2>Social Media</h2>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2021 Kate Pavlenko</p>
      </div>
    </div>
  )
}

export default Footer
