import { useState } from "react";

export default function CommunicationSection() {
  const [activeTab, setActiveTab] = useState("announcements");

  const announcements = [
    {
      id: 1,
      title: "Quarterly Townhall Meeting",
      date: "10 Feb 2026",
      type: "Event",
      description:
        "All employees are invited to attend the Q1 townhall meeting.",
    },
  ];

  const circulars = [
    {
      id: 1,
      title: "Revised Leave Policy",
      department: "HR",
      date: "01 Feb 2026",
      file: "/pdf/leave-policy.pdf",
    },
  ];

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "IT & Tech",
      location: "Kochi",
      experience: "1-3 Years",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 sm:px-10 lg:px-24 py-12 sm:py-16">

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Announcements & Communication
        </h1>
        <p className="text-gray-500 mt-2 sm:mt-3 text-base sm:text-lg">
          Company-wide updates, official circulars, and career opportunities.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 sm:gap-4 border-b border-gray-300 pb-3 sm:pb-4 mb-8 sm:mb-12">
        {[
          { key: "announcements", label: "Announcements" },
          { key: "circulars", label: "Circulars & Notices" },
          { key: "careers", label: "Careers & Referrals" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-black text-white shadow-md"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ================= ANNOUNCEMENTS ================= */}
      {activeTab === "announcements" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm bg-black text-white px-3 py-1 rounded-full">
                  {item.type}
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              <button className="mt-6 sm:mt-8 text-sm sm:text-base font-semibold text-black hover:underline">
                Read More →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ================= CIRCULARS ================= */}
      {activeTab === "circulars" && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {circulars.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b last:border-none hover:bg-gray-50 transition"
            >
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
                  {item.department} • {item.date}
                </p>
              </div>

              <a
                href={item.file}
                download
                className="mt-3 sm:mt-0 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      )}

      {/* ================= CAREERS ================= */}
      {activeTab === "careers" && (
        <div className="space-y-12 sm:space-y-16">

          {/* Job Openings */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-10">
              Internal Job Openings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>

                  <div className="mt-4 sm:mt-5 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <p><span className="font-medium">Department:</span> {job.department}</p>
                    <p><span className="font-medium">Location:</span> {job.location}</p>
                    <p><span className="font-medium">Experience:</span> {job.experience}</p>
                  </div>

                  <button className="mt-6 sm:mt-8 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Form */}
          <div className="bg-white p-6 sm:p-12 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-10">
              Refer a Candidate
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <input
                placeholder="Candidate Name"
                className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              />
              <input
                placeholder="Candidate Email"
                className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              />
              <input
                placeholder="Phone Number"
                className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              />
              <input
                placeholder="Position Applying For"
                className="border border-gray-300 p-3 sm:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              />
              <input
                type="file"
                className="md:col-span-2 border border-gray-300 p-3 sm:p-4 rounded-lg text-sm sm:text-base"
              />

              <button className="md:col-span-2 bg-black text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:opacity-90 transition">
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}