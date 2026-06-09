import { useState } from 'react';
import { motion } from 'framer-motion';
import './Booking.css';

export default function Booking() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  // 1. Added 'email' to the state
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '' });
  const [status, setStatus] = useState('');

  const slots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedSlot || !formData.date) {
      setStatus("Please select a date and a time slot.");
      return;
    }

    try {
      setStatus("Booking your slot...");
      
      // MOCK API CALL: Later, Axios will send formData to your Node.js backend here
      /*
      await axios.post('http://localhost:5000/api/bookings', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: selectedSlot
      });
      */

      setTimeout(() => {
        setStatus("Success! Your appointment is confirmed.");
        setSelectedSlot(null);
        setFormData({ name: '', phone: '', email: '', date: '' });
      }, 1500);

    } catch (error) {
      setStatus("Failed to book slot. Try again.");
    }
  };

  return (
    <section id="booking" className="booking-section section-padding">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="booking-card"
      >
        <h2 className="booking-title">Book Your Session</h2>
        
        <form onSubmit={handleBooking}>
          <div className="form-grid">
            <input 
              type="text" placeholder="Full Name" required
              className="form-input"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" placeholder="Phone Number" required
              className="form-input"
              value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          {/* 2. Added the Email Input Field */}
          <div className="form-control">
            <input 
              type="email" placeholder="Email Address" required
              className="form-input"
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-control">
            <label className="form-label">Select Date</label>
            <input 
              type="date" required
              className="form-input"
              value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <div className="form-control">
            <label className="form-label">Available Time Slots</label>
            <div className="slots-container">
              {slots.map(slot => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`slot-btn ${selectedSlot === slot ? 'selected' : ''}`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn submit-btn">
            Confirm Appointment
          </button>
          
          {status && <p className="status-msg">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}