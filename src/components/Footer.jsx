

// 2. Use anchor tags with `target="_blank"` to open the links in a new tab.

// 3. Render the `Footer` component:
//    - Ensure it appears at the bottom of each page.

// 4. Style the footer:
//    - Make sure the layout is consistent and responsive (consider centering the links).
function Footer() {
    return (
      <footer>
        
        <ul>
          <li><a href="https://github.com/deepthithampi" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/deepthithampi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://stackoverflow.com/users/1362681/deepthi" target="_blank" rel="noopener noreferrer">Stack Overflow</a></li>
        </ul>
      </footer>
    );
  }
  export default Footer;