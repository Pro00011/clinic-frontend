import { motion } from 'framer-motion';
import { Activity, Heart, Accessibility } from 'lucide-react';
import './Services.css';

const services = [
  { title: "Manual Therapy", icon: <Activity size={40} />, desc: "Hands-on techniques to mobilize joints and soft tissues." },
  { title: "Sports Rehabilitation", icon: <Accessibility size={40} />, desc: "Targeted recovery plans for athletes to return to peak performance." },
  { title: "Post-Surgery Care", icon: <Heart size={40} />, desc: "Compassionate care to restore strength and mobility after surgery." }
];

export default function Services() {
  return (
    <section id='treatments' className="services-section section-padding">
      <div className="services-header">
        <h2>Everything You Need Under One Roof</h2>
        <p>Personalized treatment plans matching your lifestyle.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="service-card"
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}