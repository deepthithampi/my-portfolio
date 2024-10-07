
import React from 'react';
import Project from '../components/Project'; 
import projectImage1 from '../assets/weather.png'; 
import projectImage2 from '../assets/employeetracker.png';
import projectImage3 from '../assets/readme_generator.png';
import projectImage4 from '../assets/rock_paper_scissors.png';
import projectImage5 from '../assets/marketing.png';
import projectImage6 from '../assets/prework.png';
// import image from '../assets/react.svg'
function Portfolio() {
  const projects = [
    {
      title: 'Weather DashBoard',
      imageUrl: projectImage1,
      // imageUrl: image,
      deployedLink: 'https://weather-dashboard-vaf6.onrender.com/',
      githubLink: 'https://github.com/deepthithampi/weather-dashboard',
    },
    {
      title: 'EmployeeTracker',
      imageUrl: projectImage2,
      // imageUrl: image,
      deployedLink: 'EmployeeTracker',
      githubLink: 'https://github.com/deepthithampi/employee-tracker',
    },
    {
      title: 'ReadMe Generator',
      imageUrl: projectImage3,
      // imageUrl: image,
      deployedLink: 'ReadMe Generator',
      githubLink: 'https://github.com/deepthithampi/readme-generator',
    },
    {
      title: 'Rock-Paper-Scissors',
      imageUrl: projectImage4,
      // imageUrl: image,
      deployedLink: 'Rock-Paper-Scissors',
      githubLink: 'https://github.com/deepthithampi/rock-paper-scissors',
    },
    {
      title: 'Marketing Web Page',
      imageUrl: projectImage5,
      // imageUrl: image,
      deployedLink: 'Marketing Web Page',
      githubLink: 'https://github.com/deepthithampi/marketing-webpage-update',
    },
    {
      title: 'PreWork Study Guide',
      imageUrl: projectImage6,
      // imageUrl: image,
      deployedLink: 'https://deepthithampi.github.io/prework-study-guide/',
      githubLink: 'https://github.com/deepthithampi/prework-study-guide',
    },
  ];

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;