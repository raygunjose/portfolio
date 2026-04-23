import "./Home.css";
import { FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
  FaBrain,
  FaCogs,
  FaTrophy } from "react-icons/fa";
import profile from "../assets/images/raygun_profile.jpg";

function Home() {
  return (
    <section className="home">

      {/* HERO CARD */}
      <div className="home-card">
        <img className="profile-img" src={profile} alt="Profile" />

        <h1>Raygun Jose</h1>
        <h3>Full Stack Developer & Technical Trainer</h3>

        <p className="tagline">
          Building scalable web, mobile & real-time systems using React,
          Flutter & .NET technologies.
        </p>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="experience-section">

        <h2 className="section-title">Teaching & Training Experience</h2>

        <div className="cards-grid">

          <div className="exp-card">
            <h3>
              <FaChalkboardTeacher style={{ marginRight: "8px" }} />
              Role
            </h3>
            <p>Full Stack Development Trainer (B.Tech students)</p>
          </div>

          <div className="exp-card">
            <h3>
              <FaLaptopCode style={{ marginRight: "8px" }} />
              Practical Training
            </h3>
            <ul>
              <li>RAG (Retrieval-Augmented Generation)</li>
              <li>Containerization Concepts</li>
              <li>React Native Project Structure</li>
              <li>API Integration</li>
              <li>Selenium Automation Basics</li>
            </ul>
          </div>

          <div className="exp-card highlight">
            <h3>
              <FaTrophy style={{ marginRight: "8px" }} />
              Impact
            </h3>
            <br/>
            <p>
              Recognized for delivering hands-on, practical training in Full Stack
              Development, DevOps, and AI/ML for engineering students.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;