
import pdf from "../assets/deepthi_resume.pdf"; 
import '../styles/resume.css'
function Resume() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript", "Express", "PostgreSQL"];

  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href={pdf} download className="resume-download-link">Download PDF</a>
      
      <h3>My Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;