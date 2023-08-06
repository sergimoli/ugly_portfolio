import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { works } from "../data/works";

function Project() {
  const [project, setProject] = useState({});
  const params = useParams();
  useEffect(() => {
    let project = works.filter((work) => work.id === params.id);
    setProject(project[0]);
  }, []);
  return (
    <div className="page page-work">
      <div className="mask">
        <img src={"/images/" + project.id + ".png"} alt={project.id} />
      </div>
      <h1 className="heading">{project.name}</h1>
      <p>{project.tech}</p>
      <p>{project.desc}</p>
      <a href={"https://" + project.url} target="_blank">
        Go to project
      </a>
    </div>
  );
}

export default Project;
