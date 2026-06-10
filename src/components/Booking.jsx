import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // <-- 1. Imported Axios
import './Booking.css';

export default function Booking() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', date: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- Added a loading state

  const slots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedSlot || !formData.date) {
      setStatus("⚠️ Please select a date and a time slot.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus("⏳ Booking your slot...");
      
      // 2. Send the real data to your Node.js Backend!
      const response = await axios.post('http://physio-backend.railway.internal/api/bookings/new', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: selectedSlot
      });

      // 3. If successful, clear the form and show success message
      if (response.status === 201) {
        setStatus("✅ Success! Your appointment is confirmed.");
        setSelectedSlot(null);
        setFormData({ name: '', phone: '', email: '', date: '' });
      }

    } catch (error) {
      console.error("Booking Error:", error);
      setStatus("❌ Failed to book slot. Please try again.");
    } finally {
      setIsSubmitting(false);
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
              type="tel" placeholder="Phone Number (e.g. +918397012552)" required
              className="form-input"
              value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

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
                  disabled={isSubmitting} // Prevent changing slots while booking
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
          </button>
          
          {status && <p className="status-msg" style={{ marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}