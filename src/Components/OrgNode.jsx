import { useState, useRef, useLayoutEffect } from "react";

export default function OrgNode({ node, level = 0 }) {
  const [open, setOpen] = useState(false);
  const isRoot = level === 0;
  const isManager = node.children?.length > 0 && level > 0;
  const childRefs = useRef([]);
  const rowRef = useRef(null);
  const [lineStyle, setLineStyle] = useState(null);

  useLayoutEffect(() => {
    if (!node.children || node.children.length < 2) return;
    if (!rowRef.current) return;

    const rowRect = rowRef.current.getBoundingClientRect();
    const firstEl = childRefs.current[0];
    const lastEl = childRefs.current[node.children.length - 1];
    if (!firstEl || !lastEl) return;

    const firstRect = firstEl.getBoundingClientRect();
    const lastRect = lastEl.getBoundingClientRect();

    const left = firstRect.left + firstRect.width / 2 - rowRect.left;
    const right = rowRect.right - (lastRect.left + lastRect.width / 2);

    setLineStyle({ left, right });
  }, [node.children]);

  const borderColor = isRoot
    ? "border-purple-400"
    : isManager
      ? "border-teal-400"
      : "border-gray-200";

  return (
    <div className="flex flex-col items-center relative">
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className={`w-36 flex items-center bg-white border ${borderColor}
                   rounded-lg shadow-sm cursor-pointer
                   hover:shadow-md hover:scale-105 transition overflow-hidden`}
      >
        {/* Left - Image */}
        <div className="w-10 h-10 bg-gray-200 flex-shrink-0">
          {node.photo ? (
            <img
              src={node.photo}
              alt={node.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[7px] text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Right - Name & Role */}
        <div className="flex flex-col justify-center px-1.5 py-1 min-w-0">
          <p
            className={`text-[10px] font-semibold leading-tight truncate ${
              isRoot
                ? "text-purple-800"
                : isManager
                  ? "text-teal-800"
                  : "text-gray-800"
            }`}
          >
            {node.name}
          </p>
          <p className="text-[8px] text-gray-500 truncate mt-0.5">
            {node.role}
          </p>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-[460px] max-w-[90%] p-5 relative flex gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-black text-lg"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

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

            <div className="flex flex-col justify-center flex-1">
              <h2 className="text-xl font-semibold">{node.name}</h2>
              <p className="text-xs text-gray-500 mb-2">{node.role}</p>
              <div className="text-xs space-y-1">
                <p>
                  <span className="font-medium">Email:</span> {node.MailId}
                </p>
                <p>
                  <span className="font-medium">Phone:</span> {node.PhNo}
                </p>
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

      {/* Children */}
      {node.children?.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical stem down from parent */}
          <div className="w-px h-5 bg-gray-300" />

          {node.children.length === 1 ? (
            <OrgNode node={node.children[0]} level={level + 1} />
          ) : (
            <div className="relative w-full flex flex-col items-center">
              <div ref={rowRef} className="relative flex gap-3">
                {lineStyle && (
                  <div
                    className="absolute top-0 h-px bg-gray-300"
                    style={{
                      left: lineStyle.left,
                      right: lineStyle.right,
                    }}
                  />
                )}

                {node.children.map((child, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                    ref={(el) => (childRefs.current[i] = el)}
                  >
                    {/* Vertical drop from horizontal bar to child */}
                    <div className="w-px h-5 bg-gray-300" />
                    <OrgNode node={child} level={level + 1} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
