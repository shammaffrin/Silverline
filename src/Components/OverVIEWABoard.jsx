import { useState } from "react";
import { achieversData } from "../Data/acheivers";
import AchieverCard from "./OverViewAcheivers";

const AchieversBoard = () => {
  const offices = ["All", ...new Set(achieversData.map(a => a.office))];
  const [selectedOffice, setSelectedOffice] = useState("All");
  const [selectedDept, setSelectedDept] = useState("All");

  const departments =
    selectedOffice === "All"
      ? ["All"]
      : [
          "All",
          ...new Set(
            achieversData
              .filter(a => a.office === selectedOffice)
              .map(a => a.department)
          ),
        ];

  const filtered = achieversData.filter(a => {
    return (
      (selectedOffice === "All" || a.office === selectedOffice) &&
      (selectedDept === "All" || a.department === selectedDept)
    );
  });

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          Achievers Board
        </h2>
        <p className="text-gray-500 mt-3">
          Recognizing Excellence Across Departments
        </p>
      </div>

      {/* Office Filter */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {offices.map((office) => (
          <button
            key={office}
            onClick={() => {
              setSelectedOffice(office);
              setSelectedDept("All");
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedOffice === office
                ? "bg-[#8B0000] text-white"
                : "bg-white border text-gray-600 hover:bg-gray-100"
            }`}
          >
            {office}
          </button>
        ))}
      </div>

      {/* Department Filter */}
      {selectedOffice !== "All" && (
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-1 rounded-full text-xs font-medium transition ${
                selectedDept === dept
                  ? "bg-gray-800 text-white"
                  : "bg-white border text-gray-500 hover:bg-gray-100"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      )}

      {/* Achievers Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((person) => (
          <AchieverCard key={person.id} person={person} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No achievers available.
        </p>
      )}
    </section>
  );
};

export default AchieversBoard;
