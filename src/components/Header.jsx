
//    - Inside `Header.js`, create a basic header layout with your name and a navigation bar.
//    - Import `Link` from `react-router-dom` for navigation.

// 2. Add navigation links:
//    - Create links for 'About Me', 'Portfolio', 'Contact', and 'Resume'.
//    - Ensure each link routes to the correct section (use the `to` prop in `Link`).

// 3. Highlight the active link:
//    - Use `NavLink` from `react-router-dom` to automatically apply an active class to the currently selected section.

// 4. Render `Header` in `App.js` so it appears on all pages.
import Navigation from './Navigation'; 
function Header() {
    return (
      <header>
        <h1>Deepthi Girija Thampi</h1>  
        <Navigation />  
      </header>
    );
  }
  export default Header;