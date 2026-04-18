import { useParams } from "react-router-dom";
import { useState } from "react";
import { Search, FileText, Download, Eye } from "lucide-react";
import { policiesData } from "../Data/policies";
import { div } from "framer-motion/client";
import LoginNavbar from "../Components/LoginNavbar";

export default function DepartmentPolicies() {
  const { department } = useParams();

  // ✅ MISSING STATES (this was breaking your code)
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Policy", "Form"];

  // ✅ Normalize slug → match your data
  const formattedDepartment = department
    .replace("and", "&")
    .replace(/-/g, " ")
    .toLowerCase()
    .trim();

  // ✅ Filtering
  const filteredPolicies = policiesData.filter((item) => {
    const matchesDepartment =
      item.department.toLowerCase() === formattedDepartment;

    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesDepartment && matchesCategory && matchesSearch;
  });

  return (
    <div>
        <LoginNavbar/>
      <div className="w-full min-h-screen bg-gray-100 px-4 sm:px-6 md:px-16 pt-38 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 capitalize">
            {formattedDepartment} Policies
          </h1>
          <p className="text-gray-500 mt-2">
            Browse all {formattedDepartment} related documents.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-6">
          {/* Category */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === cat
                    ? "bg-black text-white"
                    : "bg-white border text-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {filteredPolicies.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No documents found.
            </div>
          ) : (
            filteredPolicies.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 ${
                  index !== filteredPolicies.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Left */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
                  >
                    <Eye size={14} />
                    View
                  </a>

                  <a
                    href={item.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800"
                  >
                    <Download size={14} />
                    Download
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
