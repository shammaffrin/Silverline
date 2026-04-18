import React from "react";
import { useParams } from "react-router-dom";
import { sections } from "../Data/orgData";
import LoginNavbar from "../Components/LoginNavbar";
import OrgChart from "../Components/Orgchart"; // ✅ FIXED
import { deptData } from "../Data/DeptData";

const DepartmentPage = () => {
  const { dept } = useParams();

  const formatKey = (slug) =>
    slug
      .replace(/-/g, " ")
      .replace(/\band\b/g, "&")
      .toLowerCase();

  const departmentKey = Object.keys(sections).find(
    (key) =>
      key.toLowerCase() === dept ||
      sections[key].title.toLowerCase() === formatKey(dept),
  );

  const department = sections[departmentKey];
  const deptInfo = deptData[departmentKey]; // ✅ NEW

  if (!department) {
    return (
      <>
        <LoginNavbar />
        <div className="p-20 text-center text-gray-500">
          Department not found
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LoginNavbar />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 sm:pt-38 py-10 space-y-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          {deptInfo?.title || department.title}
        </h1>

        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-3">
          <h2 className="text-base font-semibold text-gray-800">Overview</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            {deptInfo?.overview ||
              "This department plays a key role in ensuring operational excellence, collaboration, and efficiency across the organization. It is responsible for maintaining structured workflows and supporting business growth."}
          </p>
        </div>

        {/* Org Chart */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-800">
            Organization Structure
          </h2>
          <div className="overflow-x-auto rounded-xl bg-gray-50 border border-dashed border-gray-200 p-4">
            <OrgChart data={department.data} />
          </div>
        </div>

        {/* Policies & Forms */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-base font-semibold text-gray-800">
            Policies &amp; Forms
          </h2>

          <div className="flex flex-wrap gap-3">
            {(deptInfo?.links || []).length > 0 ? (
              deptInfo.links.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#C97E7E] text-white text-sm rounded-lg hover:bg-[#b86d6d] transition"
                >
                  {item.label}
                </a>
              ))
            ) : (
              <>
                <button className="px-5 py-2.5 bg-[#C97E7E] text-white text-sm rounded-lg hover:bg-[#b86d6d] transition">
                  View Policies
                </button>
                <button className="px-5 py-2.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                  View Forms
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
