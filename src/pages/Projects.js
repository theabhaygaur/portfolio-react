import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import { projectList } from "../helper/ProjectList";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="heading">My Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              url={project.url}
            />
          );
        })}
        {/* <ProjectItem name="Task List App" image={proj1} />
        <ProjectItem name="MoviePlex (using React)" image={proj2} />
        <ProjectItem name="Gym Landing Page" image={proj3} />
        <ProjectItem name="Movie List App (using Javascript)" image={proj4} />
        <ProjectItem name="Portfolio Website" image={proj5} /> */}
      </div>
    </div>
  );
};

export default Projects;
