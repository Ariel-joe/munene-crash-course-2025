import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Devs } from "./components/Devs";
import { BrowseJobs } from "./components/BrowseJobs";
import { ViewAllJobs } from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      < Devs />

      {/* <!-- Browse Jobs --> */}
      < BrowseJobs />

      {/* view all jobs */}
      <ViewAllJobs />

      
    </>
  );
};

export { App };
