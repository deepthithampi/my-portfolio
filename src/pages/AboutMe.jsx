
// add a section with  name, a short bio, and  photo.
//    - Import the photo from the `assets` folder and display it.

// 2. Add styles to make the section look polished:
//    - Use CSS 

import image from '../assets/deepthi.jpg'
export default function AboutMe() {
    return (
      <div>
        <h1>About Me</h1><img src={image} />
        <p>
        Hello! I’m Deepthi Girija Thampi, an aspiring web developer passionate about creating dynamic and efficient applications. My journey began with front-end development, diving into JavaScript, React, and TypeScript, which naturally led me to explore full-stack development. Now, I work confidently across both front-end and back-end environments, building everything from interactive dashboards to complex data-driven applications.
        </p>
        <p>
        I enjoy crafting projects that are both technically robust and visually engaging. Some of my recent work includes a Weather Dashboard that calls live APIs, a Zoo Animal Tracker designed with TypeScript and OOP principles, and a responsive README generator. Each project is an opportunity to enhance my skills and learn new technologies, such as Express.js for server-side development, PostgreSQL for data management, and tools like Render for seamless deployment.
        </p>
        <p>
        Thanks for stopping by—I look forward to connecting and exploring new opportunities!
        </p>
      </div>
    );
  }
  