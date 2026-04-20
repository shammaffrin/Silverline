// OrgNode.jsx
import { useRef, useLayoutEffect, useState } from "react";

export default function OrgNode({ node, level = 0 }) {
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

  const cardClass = [
    "relative z-10 text-center px-2 py-1.5 rounded-xl",
    isRoot
      ? "bg-purple-50 border border-purple-400 min-w-[110px]"
      : isManager
        ? "bg-teal-50 border border-teal-400 min-w-[90px]"
        : "bg-white border border-gray-200 min-w-[90px]",
  ].join(" ");

  const nameClass = [
    "text-[10px] font-semibold truncate",
    isRoot ? "text-purple-800" : isManager ? "text-teal-800" : "text-gray-800",
  ].join(" ");

  const roleClass = [
    "text-[8px] mt-0.5 truncate",
    isRoot ? "text-purple-600" : isManager ? "text-teal-600" : "text-gray-500",
  ].join(" ");

  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <div className={cardClass}>
        <p className={nameClass}>{node.name}</p>
        <p className={roleClass}>{node.role}</p>
      </div>

      {node.children?.length > 0 && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical stem down from parent card */}
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
                    {/* Vertical drop from horizontal bar to child card */}
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
