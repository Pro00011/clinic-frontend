import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './FloatingButtons.css';

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  // Show the scroll buttons only when the user scrolls down a bit
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  // Scroll to top function
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to bottom function
  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="floating-container">
      {/* Scroll Up and Down Buttons */}
      <div className={`scroll-buttons ${showScroll ? 'visible' : ''}`}>
        <button className="action-btn secondary-btn" onClick={scrollTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
        <button className="action-btn secondary-btn" onClick={scrollBottom} aria-label="Scroll to bottom">
          <FaArrowDown />
        </button>
      </div>

      {/* WhatsApp Button */}
      {/* Replace '15551234567' with your actual country code + phone number (no plus or dashes) */}
      <a 
        href="https://wa.me/+918397012552?text=Hi%20HappyyHealingHub!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="action-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
