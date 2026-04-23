import "./About.css";
import { FaUserGraduate, FaCogs, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-card">

        <h2>About Me</h2>

        <p className="about-text">
          I am a Full Stack Developer and Technical Trainer focused on building
          end-to-end scalable systems and teaching practical software development.
        </p>

        <div className="about-grid">

          <div className="about-item">
            <FaCogs />
            <span>Problem-driven engineering mindset</span>
          </div>

          <div className="about-item">
            <FaLaptopCode />
            <span>Strong real-world implementation focus</span>
          </div>

          <div className="about-item">
            <FaChalkboardTeacher />
            <span>Build + Teach approach</span>
          </div>

          <div className="about-item">
            <FaUserGraduate />
            <span>Full stack system design experience</span>
          </div>

        </div>

        <div className="about-tags">
          <span>React</span>
          <span>Flutter</span>
          <span>.NET</span>
          <span>DevOps</span>
          <span>AI/ML</span>
        </div>

      </div>

    </section>
  );
}

export default About;