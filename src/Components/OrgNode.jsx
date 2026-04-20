import { useState } from "react";

export default function OrgNode({ node }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center relative">

      {/* Card */}
      <div
  onClick={() => setOpen(true)}
  className="w-48 flex items-center bg-white border border-gray-300 
             rounded-lg shadow-sm cursor-pointer 
             hover:shadow-md hover:scale-105 transition overflow-hidden"
>
  {/* Left - Image */}
  <div className="w-16 h-16 bg-gray-200 flex-shrink-0">
    {node.photo ? (
      <img
        src={node.photo}
        alt={node.name}
        className="w-full h-full object-cover "
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-400">
        No Image
      </div>
    )}
  </div>

  {/* Right - Name & Role */}
  <div className="flex flex-col justify-center px-2 py-1">
    <p className="text-[11px] font-semibold leading-tight truncate">
      {node.name}
    </p>
    <p className="text-[9px] flex justify-center items-center text-gray-500 truncate">
      {node.role}
    </p>
  </div>
</div>

      {/* 🔥 Modal */}
     {open && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-white rounded-xl shadow-xl w-[460px] max-w-[90%] p-5 relative flex gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        className="absolute top-3 right-4 text-gray-400 hover:text-black text-lg"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      {/* Left - Image */}
      <div className="w-45 h-45 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
        {node.photo ? (
          <img
            src={node.photo}
            alt={node.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
            No Image
          </div>
        )}
      </div>

      {/* Right - Details */}
      <div className="flex flex-col justify-center flex-1">
        <h2 className="text-xl font-semibold">{node.name}</h2>
        <p className="text-xs text-gray-500 mb-2">{node.role}</p>

        <div className="text-xs space-y-1">
          <p><span className="font-medium">Email:</span> {node.MailId}</p>
          <p><span className="font-medium">Phone:</span> {node.PhNo}</p>
        </div>

        {node.JobOverview && (
          <p className="text-[11px] text-gray-500 mt-2 leading-tight">
            {node.JobOverview}
          </p>
        )}
      </div>
    </div>
  </div>
)}

      {/* Children (unchanged) */}
      {node.children?.length > 0 && (
        <div className="flex flex-col items-center relative">

          <div className="w-px h-8 bg-gray-400"></div>

          <div className="relative inline-flex justify-center gap-2 pt-8">

            {node.children.length > 1 && (
              <div className="absolute top-0 left-0 right-0 h-px bg-gray-400"></div>
            )}

            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div className="absolute -top-8 w-px h-8 bg-gray-400"></div>
                <OrgNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
