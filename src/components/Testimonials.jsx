import { motion } from "framer-motion";
import "./Testimonials.css";

const reviews = [
  {
    name: "Rajender Kumar",
    issue: "Post-Surgery Recovery",
    text: "The team here is phenomenal. I regained full mobility in my knee weeks faster than my surgeon predicted.",
  },
  {
    name: "Mohit",
    issue: "Sports Injury",
    text: "Professional, caring, and highly effective. They didn't just treat the pain, they fixed the root cause of my shoulder issue.",
  },
  {
    name: "Kamal Devi",
    issue: "Chronic Back Pain",
    text: "I've suffered from back pain for years. The manual therapy sessions here have truly given me my life back.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="testimonials-header">
        <h2>What Our Patients Say</h2>
        <p>Real stories of recovery and renewed strength.</p>
      </div>

      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="testimonial-card"
          >
            <div className="quote-icon">"</div>
            <p className="feedback-text">"{review.text}"</p>
            <div className="patient-info">
              <h4>{review.name}</h4>
              <span>{review.issue}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
