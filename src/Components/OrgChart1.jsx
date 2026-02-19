import { useState } from "react";
import { sections } from "../Data/orgData";
import OrgChart from "./Orgchart";

export default function OrgChartSection() {
  const [active, setActive] = useState("administration");

  return (
    <div className="bg-gray-50 py-16 px-10">

      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-6">
        {sections[active].title}
      </h2>

      {/* Section Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {Object.keys(sections).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded transition ${
              active === key
                ? "bg-[#C97E7E] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {sections[key].title}
          </button>
        ))}
      </div>

      {/* Org Chart */}
      <div className="bg-white rounded-xl shadow-lg p-10">
        <OrgChart data={sections[active].data} />
      </div>

    </div>
  );
}
