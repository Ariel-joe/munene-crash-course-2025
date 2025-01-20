import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Devs } from "./components/Devs";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Developers and Employers --> */}
      < Devs />

      {/* <!-- Browse Jobs --> */}
      

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export { App };
