import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="complex-footer">
      <div id='' className="footer-container">
        
        {/* Column 1: Brand & Newsletter */}
        <div className="footer-col brand-col">
          <h2 className="footer-brand">HAPPYY<br/> HEALING HUB</h2>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </p>
          <h4 className="footer-heading-small">SUBSCRIBE FOR OUR NEWSLETTER</h4>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-heading">TREATMENTS</h3>
          <ul className="footer-links">
            <li><a href="#">Manual Therapy</a></li>
            <li><a href="#">Sports Rehabilitation</a></li>
            <li><a href="#">Post-Surgery Care</a></li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h3 className="footer-heading">CONTACT DETAILS</h3>
          <div className="contact-list">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Near Anjali Labs, Jindal Chowk,Hisar, HR</span>
            </div>
            <div className="contact-item">
              <Clock size={18} className="contact-icon" />
              <span>Mon - Fri: 9:00 - 19:00<br/>Closed on Weekends</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span><a href="tel:+918397012552" className="contact-link" >
                  +91 83970-12552
                </a></span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span><a href="mailto:happyyhealinhub@gmail.com" className="contact-link">
                  happyyhealinhub@gmail.com
                </a></span>
            </div>
          </div>
        </div>

        
        <div className="footer-col social-col">
          <h3 className="footer-heading">WE'RE SOCIAL</h3>
          <div className="footer-socials">
            <FaFacebook size={16} className="social-icon" />
            <FaInstagram size={16} className="social-icon" />
            <FaTwitter size={16} className="social-icon" />
            <FaYoutube size={16} className="social-icon" />
          </div>
          <div className="copyright">
            <p>© 2026 PhysioCare.</p>
            <p>All Rights Reserved.</p>
            <p>Distributed by <span className="teal-text">Rahul</span>.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}