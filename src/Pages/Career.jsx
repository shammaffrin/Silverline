import React, { useState } from "react";
import CareerBanner from "../Components/CareerBanner";
import { LuMoveUpRight } from "react-icons/lu";
import Footer from "../Components/Footer";
import WhySilverline from "../Components/Whysilverline";
import MeetOurPeople from "../Components/MeetourPeople";
import Lifeatsilver from "../Components/Lifeatsilver";
import CareerProcess from "../Components/Careerprocess";

const jobData = [
  // Workshop
  {
    id: 1,
    title: "Asst. Yard Supervisor",
    openings: 4,
    category: "Workshop",
    date: "22/04/2025",
  },
  {
    id: 2,
    title: "Air Compressor Specialist",
    openings: 1,
    category: "Workshop",
    date: "22/04/2025",
  },
  {
    id: 3,
    title: "Assistant Mechanic",
    openings: 1,
    category: "Workshop",
    date: "22/08/2025",
  },
  {
    id: 4,
    title: "Electrician",
    openings: 6,
    category: "Workshop",
    date: "22/08/2025",
  },
  {
    id: 5,
    title: "Assistant Electrician",
    openings: 4,
    category: "Workshop",
    date: "22/08/2025",
  },
  {
    id: 6,
    title: "Helper",
    openings: 3,
    category: "Workshop",
    date: "22/08/2025",
  },
  {
    id: 7,
    title: "Forklift Operator",
    openings: 1,
    category: "Workshop",
    date: "22/08/2025",
  },
  {
    id: 8,
    title: "Mechanic cum Driver",
    openings: 2,
    category: "Workshop",
    date: "08/09/2025",
  },
  {
    id: 9,
    title: "Diesel Engine Mechanic",
    openings: 3,
    category: "Workshop",
    date: "22/08/2025",
  },
  {
    id: 10,
    title: "Denter Cum Welder",
    openings: 1,
    category: "Workshop",
    date: "22/04/2025",
  },
  {
    id: 11,
    title: "Mechanic",
    openings: 5,
    category: "Workshop",
    date: "22/04/2025",
  },
  {
    id: 12,
    title: "Yard Supervisor",
    openings: 2,
    category: "Workshop",
    date: "22/04/2025",
  },

  // Production
  {
    id: 13,
    title: "Production Coordinator",
    openings: 1,
    category: "Production",
    date: "09/07/2025",
  },
  {
    id: 14,
    title: "Electrical Engineer",
    openings: 1,
    category: "Production",
    date: "19/09/2025",
  },
  {
    id: 15,
    title: "Production Supervisor",
    openings: 1,
    category: "Production",
    date: "19/09/2025",
  },
  {
    id: 16,
    title: "Carpenter",
    openings: 1,
    category: "Production",
    date: "19/09/2025",
  },

  // Customer Support
  {
    id: 17,
    title: "Electrician cum Driver",
    openings: 1,
    category: "Customer Support",
    date: "22/04/2025",
  },
  {
    id: 18,
    title: "Service Coordinator",
    openings: 3,
    category: "Customer Support",
    date: "19/05/2025",
  },
  {
    id: 19,
    title: "Service Inspector",
    openings: 1,
    category: "Customer Support",
    date: "19/05/2025",
  },

  // Logistics
  {
    id: 20,
    title: "Logistics Coordinator",
    openings: 3,
    category: "Logistics",
    date: "04/09/2025",
  },
  {
    id: 21,
    title: "Driver",
    openings: 5,
    category: "Logistics",
    date: "04/09/2025",
  },
  {
    id: 22,
    title: "Vehicle Mechanic",
    openings: 1,
    category: "Logistics",
    date: "04/09/2025",
  },

  // Heavy & MVD
  {
    id: 23,
    title: "Senior HM Mechanic",
    openings: 1,
    category: "Heavy & MVD",
    date: "25/07/2025",
  },
  {
    id: 24,
    title: "Motor Vehicle Mechanic",
    openings: 1,
    category: "Heavy & MVD",
    date: "25/07/2025",
  },
  {
    id: 25,
    title: "Welder",
    openings: 1,
    category: "Heavy & MVD",
    date: "25/07/2025",
  },
  {
    id: 26,
    title: "Painter cum Denter",
    openings: 1,
    category: "Heavy & MVD",
    date: "25/07/2025",
  },
  {
    id: 27,
    title: "Assistant Coordinator HM",
    openings: 1,
    category: "Heavy & MVD",
    date: "25/07/2025",
  },
  {
    id: 28,
    title: "Light Driver",
    openings: 1,
    category: "Heavy & MVD",
    date: "25/07/2025",
  },
  {
    id: 29,
    title: "Heavy Mechanic cum AC Electrician",
    openings: 1,
    category: "Heavy & MVD",
    date: "27/07/2025",
  },

  // Inventory
  {
    id: 30,
    title: "Store In-charge",
    openings: 1,
    category: "Inventory",
    date: "24/04/2025",
  },

  // Administration
  {
    id: 31,
    title: "Facility Management Executive",
    openings: 1,
    category: "Administration",
    date: "17/06/2025",
  },
  {
    id: 32,
    title: "Receptionist",
    openings: 1,
    category: "Administration",
    date: "17/06/2025",
  },
  {
    id: 33,
    title: "PRO Cum Admin",
    openings: 1,
    category: "Administration",
    date: "04/09/2025",
  },

  // IT & Tech
  {
    id: 34,
    title: "ERP Coordinator",
    openings: 1,
    category: "IT & Tech",
    date: "12/09/2025",
  },

  // Finance
  {
    id: 35,
    title: "Sr. Accountant",
    openings: 1,
    category: "Finance",
    date: "04/09/2025",
  },

  // RevOps
  {
    id: 36,
    title: "Sales Secretary",
    openings: 1,
    category: "RevOps",
    date: "04/09/2025",
  },
  {
    id: 37,
    title: "Customer Relationship Lead",
    openings: 1,
    category: "RevOps",
    date: "01/09/2025",
  },

  // P&C
  {
    id: 38,
    title: "L&D Executive",
    openings: 1,
    category: "P&C",
    date: "10/09/2025",
  },
  {
    id: 39,
    title: "HR & Admin Head",
    openings: 1,
    category: "P&C",
    date: "10/09/2025",
  },
  {
    id: 40,
    title: "HR Assistant",
    openings: 1,
    category: "P&C",
    date: "01/09/2025",
  },

  // Management
  {
    id: 41,
    title: "Executive Assistant",
    openings: 1,
    category: "Management",
    date: "01/09/2025",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(jobData.map((job) => job.category))),
];
const roles = ["All", ...Array.from(new Set(jobData.map((job) => job.title)))];

const Career = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredJobs = jobData.filter((job) => {
    const matchCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchRole = selectedRole === "All" || job.title === selectedRole;
    return matchCategory && matchRole;
  });

  return (
    <>
      <CareerBanner />
      <WhySilverline />
      <MeetOurPeople />
      <Lifeatsilver />
      <CareerProcess />

      <div id="jobs" className="px-6 md:px-12 mt-6 mx-auto p-6">
        <div className="mb-8">
          <button className="px-6 py-3 border border-red-700 text-red-700 rounded-full text-md font-medium">
            We’re hiring!
          </button>
          <h2 className="mt-4 text-3xl font-bold">Be part of our mission</h2>
          <p className="mt-2 text-gray-700 max-w-3xl">
            Join Silverline Rental and be part of a dynamic team. We value
            teamwork, innovation, and ownership. Grow with us and make an
            impact!
          </p>
        </div>

        {/* Advanced Search */}
        <div className="p-4 mb-10">
          <h3 className="font-semibold mb-4 text-lg">Advanced Search</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <select
              className="border p-2 rounded-full border-[#ddd] w-full md:w-1/2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="border p-2 rounded-full border-[#ddd] w-full md:w-1/2"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="border-t border-[#ddd] pt-6">
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600 mt-1">
                      Department: {job.category}
                    </p>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="px-3 py-0.5 border border-gray-300 bg-[#8B0000] text-white text-sm rounded-full">
                        {job.openings} Openings
                      </span>
                      <span className="px-3 py-0.5 bg-gray-100 text-sm rounded-full">
                        Req: {job.date}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/apply"
                    className="text-black hover:text-[#8B0000] group font-medium flex items-center gap-1"
                  >
                    Apply{" "}
                    <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-300 ease-in-out">
                      <LuMoveUpRight />
                    </span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center pt-10">
              No openings match your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
