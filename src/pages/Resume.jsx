
//   add a link to download your resume (PDF format).
//    - Below the link, create a list of your technical skills (e.g., HTML, CSS, JavaScript, React, etc.).

// 2. Style the Resume section:
//    - Use a clean layout to display your skills and the resume download link.

// 3. Test the Resume section:
//    - Ensure the download link works correctly.

import pdf from "../assets/deepthi_resume.pdf"; // put resume in assets
function Resume() {
    return (
      <div>
        {/* <h1>Resume</h1> */}
        <h5>My Skills</h5>
        
        <p>Download my resume</p>
        {/* <a href={`${process.env.PUBLIC_URL}/assets/deepthi_resume.pdf`} download> Download</a> */}
        <a href={pdf} download>Download</a> 
      </div>
    );
  }
  
  export default Resume;