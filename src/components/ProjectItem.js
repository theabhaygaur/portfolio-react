import React from "react";

const ProjectItem = ({ image, name, url }) => {
  return (
    <div className="projectItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
        onClick={() => window.open(url, "_blank")}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
