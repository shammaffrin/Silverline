import { useState } from "react";
import { jobsData } from "../Data/jobsData";
import LoginNavbar from "../Components/LoginNavbar";

const departments = [
  "All Departments",
  ...new Set(jobsData.map((j) => j.department)),
];

const deptColors = {
  "People & Culture": "bg-rose-50 text-rose-700 border border-rose-200",
  "IT & Tech": "bg-indigo-50 text-indigo-700 border border-indigo-200",
  Finance: "bg-amber-50 text-amber-700 border border-amber-200",
  Inventory: "bg-teal-50 text-teal-700 border border-teal-200",
  Sales: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Operations: "bg-sky-50 text-sky-700 border border-sky-200",
};

const locationIcon = (
  <svg
    className="w-3.5 h-3.5 inline mr-1 opacity-60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const briefcaseIcon = (
  <svg
    className="w-3.5 h-3.5 inline mr-1 opacity-60"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

function ViewModal({ job, onClose }) {
  if (!job) return null;
  return (
  <div>
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-t-2xl p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white/90 mb-3 inline-block`}
                >
                  {job.department}
                </span>
                <h2 className="text-2xl font-bold tracking-tight">
                  {job.title}
                </h2>
                <p className="text-slate-300 text-sm mt-1">{job.role}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors ml-4 mt-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 text-sm">
              <span className="flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1">
                <svg
                  className="w-4 h-4 opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {job.experience}
              </span>
              <span className="flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1">
                <svg
                  className="w-4 h-4 opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                {job.type}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            {/* Locations */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                Locations
              </h3>
              <div className="flex flex-wrap gap-2">
                {job.location.map((loc) => (
                  <span
                    key={loc}
                    className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-600 flex items-center"
                  >
                    {locationIcon}
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                About the Role
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                Responsibilities
              </h3>
              <ul className="space-y-1.5">
                {job.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
                Skills Required
              </h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReferModal({ job, onClose }) {
  const [form, setForm] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    candidateLinkedIn: "",
    relationship: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!job) return null;

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    const required = [
      "referrerName",
      "referrerEmail",
      "candidateName",
      "candidateEmail",
    ];
    for (const field of required) {
      if (!form[field].trim()) {
        alert("Please fill in all required fields.");
        return;
      }
    }
    setLoading(true);

    const subject = encodeURIComponent(
      `Referral: ${form.candidateName} for ${job.title}`,
    );
    const body = encodeURIComponent(
      `JOB REFERRAL SUBMISSION\n` +
        `========================\n\n` +
        `POSITION DETAILS\n` +
        `Job Title: ${job.title}\n` +
        `Role: ${job.role}\n` +
        `Department: ${job.department}\n` +
        `Location(s): ${job.location.join(", ")}\n\n` +
        `REFERRED BY\n` +
        `Name: ${form.referrerName}\n` +
        `Email: ${form.referrerEmail}\n` +
        `Phone: ${form.referrerPhone || "N/A"}\n` +
        `Relationship to Candidate: ${form.relationship || "N/A"}\n\n` +
        `CANDIDATE DETAILS\n` +
        `Name: ${form.candidateName}\n` +
        `Email: ${form.candidateEmail}\n` +
        `Phone: ${form.candidatePhone || "N/A"}\n` +
        `LinkedIn: ${form.candidateLinkedIn || "N/A"}\n\n` +
        `ADDITIONAL NOTES\n` +
        `${form.note || "None"}\n`,
    );

    window.location.href = `mailto:hr@silverlinerental.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Referral Sent!
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Your referral for <strong>{form.candidateName}</strong> has been
              submitted to our HR team. Thank you!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  Refer a Candidate
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  For:{" "}
                  <span className="font-medium text-slate-700">
                    {job.title}
                  </span>{" "}
                  · {job.department}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Referrer Info */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Your Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      name="referrerName"
                      value={form.referrerName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        name="referrerEmail"
                        value={form.referrerEmail}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        type="email"
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Your Phone
                      </label>
                      <input
                        name="referrerPhone"
                        value={form.referrerPhone}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Your Relationship with Candidate
                    </label>
                    <select
                      name="relationship"
                      value={form.relationship}
                      onChange={handleChange}
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition text-slate-600 bg-white"
                    >
                      <option value="">Select relationship</option>
                      <option>Former Colleague</option>
                      <option>Friend</option>
                      <option>Family</option>
                      <option>Professional Contact</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-slate-200"></div>

              {/* Candidate Info */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                  Candidate Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Candidate Full Name{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      name="candidateName"
                      value={form.candidateName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Candidate Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        name="candidateEmail"
                        value={form.candidateEmail}
                        onChange={handleChange}
                        placeholder="candidate@email.com"
                        type="email"
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Candidate Phone
                      </label>
                      <input
                        name="candidatePhone"
                        value={form.candidatePhone}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      name="candidateLinkedIn"
                      value={form.candidateLinkedIn}
                      onChange={handleChange}
                      placeholder="linkedin.com/in/username"
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 mb-1">
                      Why are you referring this person?
                    </label>
                    <textarea
                      name="note"
                      value={form.note}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Brief note about the candidate's strengths..."
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-2.5 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition placeholder-slate-300 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-white text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Sending Referral...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send Referral to HR
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 -mt-3">
                Referral will be sent to hr@silverlinerental.com
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function JobCard({ job, onView, onRefer }) {
  const deptClass = deptColors[job.department] || "bg-slate-100 text-slate-600";
  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-lg hover:border-slate-300 transition-all duration-200">
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${deptClass} inline-block mb-2`}
          >
            {job.department}
          </span>
          <h3 className="text-base font-bold text-slate-800 leading-tight">
            {job.title}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">{job.role}</p>
        </div>
        <span className="flex-shrink-0 text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
          {briefcaseIcon}
          {job.type}
        </span>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5 opacity-60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {job.experience}
        </span>
        <span className="flex items-center flex-wrap gap-1">
          {locationIcon}
          {job.location.join(", ")}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 border border-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1 border-t border-slate-100 mt-auto">
        <button
          onClick={() => onView(job)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View Details
        </button>
        {job.referable && (
          <button
            onClick={() => onRefer(job)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 active:scale-[0.98] transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Refer
          </button>
        )}
      </div>
    </div>
  );
}

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All Departments");
  const [viewJob, setViewJob] = useState(null);
  const [referJob, setReferJob] = useState(null);

  const filtered = jobsData.filter((job) => {
    const matchDept = dept === "All Departments" || job.department === dept;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      job.title.toLowerCase().includes(q) ||
      job.role.toLowerCase().includes(q) ||
      job.skills.some((s) => s.toLowerCase().includes(q)) ||
      job.location.some((l) => l.toLowerCase().includes(q));
    return matchDept && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <LoginNavbar />
      {/* Hero */}
      <div className="bg-gradient-to-br pt-20 from-slate-800 via-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-3">
            Silverline Rental
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Open Positions
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Join a growing team across the GCC. Find your next opportunity or
            refer someone great.
          </p>

          {/* Search + Filter */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, skill, or location..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm outline-none focus:bg-white/15 focus:border-white/40 transition"
              />
            </div>
            <div className="relative">
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="appearance-none w-full sm:w-auto pl-4 pr-9 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm outline-none focus:bg-white/15 focus:border-white/40 transition cursor-pointer"
              >
                {departments.map((d) => (
                  <option key={d} value={d} className="text-slate-800 bg-white">
                    {d}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "position" : "positions"}
            {dept !== "All Departments" && (
              <>
                {" "}
                in <span className="font-semibold text-slate-700">{dept}</span>
              </>
            )}
          </p>
          {(search || dept !== "All Departments") && (
            <button
              onClick={() => {
                setSearch("");
                setDept("All Departments");
              }}
              className="text-xs text-slate-500 hover:text-slate-700 underline underline-offset-2 transition"
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-7 h-7 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-slate-500 font-medium">No positions found</p>
            <p className="text-slate-400 text-sm mt-1">
              Try adjusting your search or filter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onView={setViewJob}
                onRefer={setReferJob}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      {viewJob && <ViewModal job={viewJob} onClose={() => setViewJob(null)} />}
      {referJob && (
        <ReferModal job={referJob} onClose={() => setReferJob(null)} />
      )}
    </div>
  );
}
