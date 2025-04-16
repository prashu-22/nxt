import React from 'react'

import './index.css'

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe-section">
          <h4>Be the first to know</h4>
          <p>Sign up for updates from mettà muse.</p>
          <form>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="contact-section">
          <h4>Contact Us</h4>
          <p>+44 221 123 4569</p>
          <p>customercare@mettamuse.com</p>

          <h4>Currency</h4>
          <p>USD</p>
          <p>
            Transactions will be completed in USD. Estimated conversion shown
            for convenience.
          </p>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h5>mettà muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as Seller</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="social-section">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>

          <h5>mettà muse Accepts</h5>
          <div className="payment-icons">
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard.png"
              alt="MasterCard"
            />
            <img
              src="https://img.icons8.com/color/48/000000/apple-pay.png"
              alt="Apple Pay"
            />
            <img
              src="https://img.icons8.com/color/48/000000/google-pay.png"
              alt="Google Pay"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  </>
)

export default Footer
