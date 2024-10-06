
//    - Inside `Project.js`, create a card or tile layout that displays a project image, title, and two links (one to the deployed app and one to the GitHub repo).
//    - Pass project details (image, title, links) as props.
function Project({ title, imageUrl, deployedLink, githubLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={imageUrl} alt={`Screenshot of ${title}`} />
        <div>
          {/* <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> */}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </div>
    );
  }
  export default Project;