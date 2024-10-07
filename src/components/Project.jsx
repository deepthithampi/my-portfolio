
function Project({ title, imageUrl, deployedLink, githubLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={imageUrl} alt={`Screenshot of ${title}`} />
        <div>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">{title}</a><br></br>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink} </a>
        </div>
      </div>
    );
  }
  export default Project;