import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const JobListing = () => {
  return (
    <div>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">Full-Time</div>
          <h3 className="text-xl font-bold">Senior React Developer</h3>
        </div>

        <div className="mb-5">
          We are seeking a talented Front-End Developer to join our team in
          Boston, MA. The ideal candidate will have strong skills in HTML, CSS,
          and JavaScript...
        </div>

        <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center text-orange-700 mb-3">
            <FaLocationDot size={20} className="mr-1" />
            Boston, MA
          </div>
          <a
            href="job.html"
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export { JobListing };
