import './Team.css';

const doctors = [
  {
    name: "Dr. Sachiin Yadav",
    title: "BPT, MPT Orthopedic and Sports HSCP /PT /2024 /2755",
    specialty: "Sports Injuries & Orthopedics",
    // Replace this placeholder with the actual image URL or local path
    image: "src/assets/man.png"
  },
  {
    name: "Dr. Rajesh kumari",
    title: "BPT Gold Medalist, MPT Neuro.HSCP /PT /2024 /3039",
    specialty: "Neurological & Geriatric Care",
    // Replace this placeholder with the actual image URL or local path
    image: "src/assets/women.png"
  }
];

export default function Team() {
  return (
    <section id="team" className="team-section section-padding">
      <div className="team-container">
        <div className="team-header text-center">
          <h4 className="section-subtitle">OUR DOCTORS</h4>
          <h2 className="section-title">Meet Our Expert Team</h2>
        </div>

        <div className="team-list">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-horizontal-card">
              <div className="doctor-image-circle">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              
              <div className="doctor-details">
                <h3 className="doctor-name">{doctor.name}</h3>
                <h4 className="doctor-title">{doctor.title}</h4>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <p className="doctor-bio">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}