import React from "react";
import { works } from "../data/works";
import { Link } from "react-router-dom";
import ListWorks from "./ListWorks";

function Portfolio() {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>
      <ListWorks></ListWorks>
    </div>
  );
}

export default Portfolio;
