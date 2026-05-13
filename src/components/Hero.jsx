import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section id='hero' className="hero-container">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          A better life starts with <br/> pain-free movement.
        </h1>
        <p className="hero-desc">
          Welcome to HPC, where trust, comfort, and expert rehabilitation are our top priorities.
        </p>
        <button 
          onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
          className="btn hero-btn"
        >
          Book Appointment
        </button>
      </motion.div>
    </section>
  );
}