"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import { Fragment } from "react";

const AppHomePage = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default AppHomePage;
