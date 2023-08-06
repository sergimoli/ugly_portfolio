import React from "react";
// import { BrowseRouter, Routes, Route, NavLink } from "react-router-dom";
import Start from "../components/Start";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Curriculum from "../components/Curriculum";
import Contact from "../components/Contact";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderNav from "../components/layout/HeaderNav";
import Footer from "../components/layout/Footer";
import Project from "../components/Project";

function MyRoutes() {
  return (
    <BrowserRouter>
      {/* header i nav */}
      <HeaderNav></HeaderNav>
      {/* continugut central */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/start" />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project/:id" element={<Project />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1 className="heading">ERROR 404</h1>
              </div>
            }
          ></Route>
        </Routes>
      </section>
      {/* footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default MyRoutes;
