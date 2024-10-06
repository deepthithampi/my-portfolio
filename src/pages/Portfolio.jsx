
//  import `Project` and use it to display six projects.
//    - Map over an array of project data (image, title, links) to render the `Project` component multiple times.

// 2. Add images for each project:
//    - Import the project images from the `assets` folder.
//    - Ensure the images link to the correct apps and repos.

// 3. Style the Portfolio section:
// - Ensure the projects are displayed in a grid or card layout.
// - Add hover effects or animations if desired.
// This component will be used in the Portfolio section to showcase multiple projects.
// Each instance of Project will display a project with its image, title, links to the deployed project, and the GitHub repository.

import React from 'react';
import Project from '../components/Project'; 
// import projectImage1 from './assets/projectImage1.jpg'; // Import project images
// import projectImage2 from './assets/projectImage2.jpg';
// import projectImage3 from './assets/projectImage3.jpg';
// import projectImage4 from './assets/projectImage4.jpg';
// import projectImage5 from './assets/projectImage5.jpg';
// import projectImage6 from './assets/projectImage6.jpg';
import image from '../assets/react.svg'
function Portfolio() {
  const projects = [
    {
      title: 'Weather DashBoard',
      // imageUrl: projectImage1,
      imageUrl: image,
      deployedLink: 'Weather DashBoard',
      githubLink: 'https://github.com/deepthithampi/weather-dashboard',
    },
    {
      title: 'EmployeeTracker',
      // imageUrl: projectImage2,
      imageUrl: image,
      deployedLink: 'EmployeeTracker',
      githubLink: 'https://github.com/deepthithampi/employee-tracker',
    },
    {
      title: 'ReadMe Generator',
      // imageUrl: projectImage3,
      imageUrl: image,
      deployedLink: 'ReadMe Generator',
      githubLink: 'https://github.com/deepthithampi/readme-generator',
    },
    {
      title: 'Rock-Paper-Scissors',
      // imageUrl: projectImage4,
      imageUrl: image,
      deployedLink: 'Rock-Paper-Scissors',
      githubLink: 'https://github.com/deepthithampi/rock-paper-scissors',
    },
    {
      title: 'Project Five',
      // imageUrl: projectImage5,
      imageUrl: image,
      deployedLink: 'Marketing Web Page',
      githubLink: 'https://github.com/deepthithampi/marketing-webpage-update',
    },
    {
      title: 'PreWork Study Guide',
      // imageUrl: projectImage6,
      imageUrl: image,
      deployedLink: 'PreWork Study Guide',
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