import "./Team.css";

const doctors = [
  {
    name: "Dr. Sachiin Yadav",
    title: "BPT, MPT Orthopedic and Sports HSCP /PT /2024 /2755",
    specialty: "Sports Injuries & Orthopedics",
    image: "/man.png", // <-- Just use a string starting with a slash!
  },
  {
    name: "Dr. Rajesh kumari",
    title: "BPT Gold Medalist, MPT Neuro.HSCP /PT /2024 /3039",
    specialty: "Neurological & Geriatric Care",
    image: "/women.png", // <-- Just use a string starting with a slash!
  },
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
