import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id='contact' className="contact-section section-padding">
      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-info"
        >
          <h2>Visit Our Clinic</h2>
          
          <div className="info-item">
            <div className="info-icon"><MapPin size={24} /></div>
            <div className="info-text">
             <h4>Location</h4>
              <p>
                Opposite New Court,
                <br />
                Hansi, 125033, HR
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone size={24} /></div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>
                {/* Added tel: link */}
                <a href="tel:+918397012552" className="contact-link">
                  +91 83970-12552
                </a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Mail size={24} /></div>
            <div className="info-text">
              <h4>Email</h4>
              <p>
                {/* Added mailto: link */}
                <a href="mailto:dr.sachin@happyyhealinghub.in" className="contact-link">
                 dr.sachin@happyyhealinghub.in
                </a>
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Clock size={24} /></div>
            <div className="info-text">
              <h4>Hours</h4>
              <p>Mon - Fri: 8:00 AM - 7:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="map-placeholder"
        >
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.525781904494!2d75.97789897539843!3d29.090155075417943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391239004ff49d01%3A0xb1bf6d69f8efc808!2sHappyy%20Healing%20Hub%20physiotherapy%20And%20rehabilitation%20Centre!5e0!3m2!1sen!2sin!4v1781143897157!5m2!1sen!2sin"
            width="800"
            height="600"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic location map"
          />
        </motion.div>
      </div>
    </section>
  );
}
