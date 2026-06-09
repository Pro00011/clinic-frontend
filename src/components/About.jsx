import { CheckCircle } from "lucide-react";
import "./About.css";

export default function About() {
  const benefits = [
    "Over 2 years of clinical experience",
    "State-of-the-art rehabilitation equipment",
    "Personalized 1-on-1 treatment plans",
    "Compassionate, patient-first approach",
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="about-container">
        <div className="about-image-wrapper">
          {/* Replace this URL with a real photo of your team/clinic later */}
          <img
            src="src/assets/physio.jpg"
            alt="Physiotherapist working with a patient"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h4 className="section-subtitle">ABOUT US</h4>
          <h2 className="section-title">
            Dedicated to Your Physical Well-being & Recovery
          </h2>
          <p className="about-desc">
            At Happyy Healing Hub, we believe that living a pain-free, active
            life is everyone's right. Our team of certified physiotherapists
            utilizes the latest evidence-based techniques to diagnose, treat,
            and prevent a wide range of musculoskeletal conditions.
          </p>
          <p className="about-desc">
            Whether you are recovering from surgery, healing from a sports
            injury, or managing chronic pain, we are here to support your
            journey back to peak health.
          </p>

          <ul className="about-list">
            {benefits.map((item, index) => (
              <li key={index} className="about-list-item">
                <CheckCircle className="check-icon" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
