import { useState } from "react";
import LoginNavbar from "../Components/LoginNavbar";

export default function AnnouncementsPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const announcements = [
    {
      id: 1,
      title: "Quarterly Townhall Meeting",
      date: "10 Feb 2026",
      type: "Event",
      description:
        "All employees are invited to attend the Q1 townhall meeting.",
      fullContent:
        "This is the detailed content of the townhall meeting. It can include agenda, speakers, timings, and more information. Add as much content as needed to test scrolling behavior inside the modal.",
    },
    {
      id: 2,
      title: "New Office Opening",
      date: "20 Feb 2026",
      type: "Announcement",
      description: "We are opening a new branch office.",
      fullContent:
        "Detailed information about the new office, location, facilities, and inauguration plans.",
    },
  ];

  return (
    <>
      <style>{`
        .ann-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.4rem 1.5rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .ann-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }
        .ann-card-footer-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          font-size: 14px;
          margin-left: auto;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .ann-card:hover .ann-card-footer-arrow {
          background: #f4f4f4;
        }
        .ann-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 1rem;
        }
        .ann-modal {
          background: #fff;
          border-radius: 16px;
          width: 100%;
          max-width: 560px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }
        .ann-modal-body {
          padding: 2rem 2rem 1.25rem;
          max-height: 65vh;
          overflow-y: auto;
        }
        .ann-modal-footer {
          padding: 1rem 2rem;
          border-top: 1px solid #f3f4f6;
          display: flex;
          justify-content: flex-end;
        }
        .ann-close-btn {
          font-size: 13px;
          padding: 7px 20px;
          border-radius: 20px;
          border: 1px solid #d1d5db;
          cursor: pointer;
          background: transparent;
          color: #374151;
          transition: background 0.15s;
        }
        .ann-close-btn:hover {
          background: #f9fafb;
        }
      `}</style>

      <div>
        <LoginNavbar />

        <div className="min-h-screen w-full bg-gray-100 px-4 sm:px-10 lg:px-24 pt-38 py-12">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Announcements
            </h1>
            <p className="text-gray-500 mt-2">
              Stay updated with company announcements.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="ann-card"
                onClick={() => setSelectedItem(item)}
              >
                {/* Top row */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center mt-5">
                  <span className="text-xs text-gray-400">Read more</span>
                  <span className="ann-card-footer-arrow">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedItem && (
            <div
              className="ann-modal-overlay"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="ann-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="ann-modal-body">
                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                      {selectedItem.type}
                    </span>
                    <span className="text-sm text-gray-400">
                      {selectedItem.date}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {selectedItem.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedItem.fullContent}
                  </p>
                </div>

                <div className="ann-modal-footer">
                  <button
                    className="ann-close-btn"
                    onClick={() => setSelectedItem(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}