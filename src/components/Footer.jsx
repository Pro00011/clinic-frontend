import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="complex-footer">
      <div id="" className="footer-container">
        {/* Column 1: Brand & Newsletter */}
        <div className="footer-col brand-col">
          <h2 className="footer-brand">
            HAPPYY
            <br /> HEALING HUB
          </h2>
          <p className="footer-desc">One Step Towards Better Life.</p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">TREATMENTS</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Manual Therapy</a>
            </li>
            <li>
              <a href="#">Sports Rehabilitation</a>
            </li>
            <li>
              <a href="#">Post-Surgery Care</a>
            </li>
            <li>
              <a href="#">Joint Pain Relief</a>
            </li>
            <li>
              <a href="#">Workplace Ergonomics</a>
            </li>
            <li>
              <a href="#">Electrotherapy Modalities</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">CONTACT DETAILS</h3>
          <div className="contact-list">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Opposite New Court,Hansi, 125033, HR</span>
            </div>
            <div className="contact-item">
              <Clock size={18} className="contact-icon" />
              <span>
                Mon - Fri: 9:00 - 19:00
                <br />
                Closed on Weekends
              </span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>
                <a href="tel:+918397012552" className="contact-link">
                  +91 83970-12552
                </a>
              </span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>
                <a
                  href="mailto:dr.sachin@happyyhealinghub.in"
                  className="contact-link"
                >
                  dr.sachin@happyyhealinghub.in
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-col social-col">
          <h3 className="footer-heading">WE'RE SOCIAL</h3>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/share/r/1RszgHxds7/"
              target="_blank"
            >
              <FaFacebook size={16} className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/hhhphysiotherapy2024?igsh=MWtyYWczbmhlOHpybg=="
              target="_blank"
            >
              <FaInstagram size={16} className="social-icon" />
            </a>
            {/* <FaXTwitter size={16} className="social-icon" /> */}
            <a
              href="https://youtube.com/@hhhphysiotherapyclinic?si=Un7r-Uqisy213bZ2"
              target="_blank"
            >
              <FaYoutube size={16} className="social-icon" />
            </a>
          </div>
          <div className="copyright">
            <p>© 2026 PhysioCare.</p>
            <p>All Rights Reserved.</p>
            {/* <p>
              Distributed by <span className="teal-text">Rahul</span>.
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
