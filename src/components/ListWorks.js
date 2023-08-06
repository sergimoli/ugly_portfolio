import React from "react";
import { works } from "../data/works";
import { Link } from "react-router-dom";

function ListWorks({ limit }) {
  return (
    <section className="works">
      {works.slice(0, limit).map((work) => {
        return (
          <article className="work-item" key={work.id}>
            <div className="mask">
              <img src={"/images/" + work.id + ".png"} alt={work.id} />
            </div>
            <span>{work.cat}</span>
            <h2>
              <Link to={"/project/" + work.id}>{work.name}</Link>
            </h2>
            <h3>{work.tech}</h3>
          </article>
        );
      })}
    </section>
  );
}

export default ListWorks;
