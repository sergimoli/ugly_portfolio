import React from "react";
import { Link } from "react-router-dom";
import ListWorks from "./ListWorks";

function Start() {
  return (
    <div className="home">
      <h1 className="heading">
        Hi there! It's Sergi Molina. <strong>Full Stack</strong> developer from
        Barcelona. I offer my services about <strong>development</strong> in any
        type web project.
      </h1>
      <h2 className="title">
        more test. <Link to="/contact">Contact with me</Link>
      </h2>
      <section className="last-works">
        <h2 className="heading">many projects </h2>
        <p>these are many projects done</p>
        <ListWorks limit="2" />
      </section>
    </div>
  );
}

export default Start;
