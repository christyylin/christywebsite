import { Routes, Route, Navigate } from "react-router-dom";
import Projects from "./landing_page_screens/Projects";
import About from "./landing_page_screens/About";
import Contact from "./landing_page_screens/Contact";
import Home from "./landing_page_screens/Home";


import {
    projectsPath,
    aboutPath,
    contactPath,
    mementoMoriPath,
    miroPath,
    upreachPath,
    newsletterPath,
    snapchatPath
} from "../constants/RouteConstants";
// import Footer from "./landing_page_components/Footer";
import Navbar from "./landing_page_components/Navbar";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { robotHeader } from "../util/RobotHeader";

function LandingPage() {
  let robotMetaTag = robotHeader();
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Helmet>
        <title>christylin</title>
        {robotMetaTag}
      </Helmet>
      <Navbar open={open} setOpen={setOpen} />
      <div className="">
        <Routes>
          <Route index element={<Home open={open} />} />,
          <Route path={projectsPath} index element={<Projects />} />
          <Route path={aboutPath} index element={<About />} />
          <Route path={contactPath} index element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
