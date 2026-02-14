import { useState } from "react";
import { policiesData } from "../Data/policies";
import { Search, FileText, Download, Eye } from "lucide-react";

export default function PoliciesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Policy", "Form"];

  const filteredPolicies = policiesData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-gray-100 px-6 md:px-16 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Policies & Documents
        </h1>
        <p className="text-gray-500 mt-2">
          Access company policies, guidelines and downloadable forms.
        </p>
      </div>

      {/* Top Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        
        {/* Category Tabs */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-600 border hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Document List */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {filteredPolicies.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No documents found.
          </div>
        ) : (
          filteredPolicies.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 ${
                index !== filteredPolicies.length - 1
                  ? "border-b"
                  : ""
              } hover:bg-gray-50 transition`}
            >
              {/* Left Section */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText size={20} className="text-black" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border hover:bg-gray-100 transition"
                >
                  <Eye size={16} />
                  View
                </a>

                <a
                  href={item.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
