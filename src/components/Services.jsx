import {
  Activity,
  Accessibility,
  Heart,
  Bone,
  Briefcase,
  Zap,
} from "lucide-react";
import "./Services.css";

const servicesList = [
  {
    title: "Manual Therapy",
    icon: <Activity size={32} />,
    desc: "Hands-on techniques to mobilize joints, reduce tension, and improve flexibility in soft tissues.",
  },
  {
    title: "Sports Rehabilitation",
    icon: <Accessibility size={32} />,
    desc: "Targeted recovery plans designed specifically for athletes to safely return to peak performance.",
  },
  {
    title: "Post-Surgery Care",
    icon: <Heart size={32} />,
    desc: "Compassionate, step-by-step physical therapy to restore strength and mobility after surgical procedures.",
  },
  {
    title: "Joint Pain Relief",
    icon: <Bone size={32} />,
    desc: "Specialized treatments for arthritis, knee, shoulder, and hip pain to help you move without discomfort.",
  },
  {
    title: "Workplace Ergonomics",
    icon: <Briefcase size={32} />,
    desc: "Assessments and posture correction strategies to prevent and treat desk-related injuries.",
  },
  {
    title: "Electrotherapy Modalities",
    icon: <Zap size={32} />,
    desc: "Advanced electrotherapy treatments including TENS, IFT, Ultrasound, and Muscle Stimulation to reduce pain, promote healing, and improve physical function.",
  },
];

export default function Services() {
  return (
    <section id="treatments" className="services-section section-padding">
      <div className="services-container">
        <div className="services-header text-center">
          <h4 className="section-subtitle">OUR EXPERTISE</h4>
          <h2 className="section-title">Comprehensive Care Under One Roof</h2>
          <p className="services-subtitle-text">
            We offer a wide range of specialized physical therapy treatments
            customized to your unique lifestyle and goals.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              {/* <button className="service-link">Learn more &rarr;</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
