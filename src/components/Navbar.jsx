import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="header-wrapper">
      {/* Top Bar with Contact and Socials */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="flex-center">
            <MapPin size={14} /> Near Anjali Labs, Jindal Chowk,Hisar, HR
          </span>
          <span className="flex-center">
            <Phone size={14} /> +91 83970 12552
          </span>
        </div>
        <div className="top-bar-right">
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
          {/* <a href="#" target="_blank">
            <FaTwitter size={16} className="social-icon" />
          </a> */}
          <a
            href="https://youtube.com/@hhhphysiotherapyclinic?si=Un7r-Uqisy213bZ2"
            target="_blank"
          >
            <FaYoutube size={16} className="social-icon" />
          </a>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-brand">HAPPYY HEALING HUB</div>
        <div className="nav-links">
          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About Us
          </button>

          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById("treatments")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Treatments
          </button>

          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById("testimonials")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Testimonials
          </button>

          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </button>
          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById("faq")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            FAQ
          </button>

          <button
            className="nav-link outline-btn"
            onClick={() =>
              document
                .getElementById("booking")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Appointment
          </button>
        </div>
      </nav>
    </div>
  );
}
