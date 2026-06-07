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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.07972292993946!2d76.8529202342131!3d30.72084052181143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f93f6764f950d%3A0xf92fa250a51f6c5!2sBoora%20PG!5e0!3m2!1sen!2sin!4v1780811518407!5m2!1sen!2sin"
            width="800"
            height="600"
            style={{ border: 0, width: '100%', height: '100%', borderRadius: '20px' }}
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