import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Devs } from "./components/Devs";
import { ViewAllJobs } from "./components/ViewAllJobs";
import { Card } from "./components/Card";
import { JobListing } from "./components/JobListing";
import { BrowseJobs } from "./components/BrowseJobs";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      <Devs />

      {/* <!-- Browse Jobs --> */}
      <BrowseJobs>
        <Card>
          <JobListing />
        </Card>

        <Card>
          <JobListing />
        </Card>

        <Card>
          <JobListing />
        </Card>
      </BrowseJobs>

      {/* view all jobs */}
      <ViewAllJobs />
    </>
  );
};

export { App };
