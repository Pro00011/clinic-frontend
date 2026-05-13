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
              <p>Near Anjali Labs, Jindal Chowk<br/>Hisar, HR</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone size={24} /></div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>+1 (91) 83970-12552</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Mail size={24} /></div>
            <div className="info-text">
              <h4>Email</h4>
              <p>care@physiocareclinic.com</p>
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
          {/*  Google Maps iframe */}
          [Interactive Map Placeholder]
        </motion.div>
      </div>
    </section>
  );
}