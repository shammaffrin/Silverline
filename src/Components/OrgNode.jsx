export default function OrgNode({ node }) {
  return (
    <div className="flex flex-col items-center relative">

      {/* Card */}
      <div className="w-28 py-2 px-2 bg-white border border-gray-400 
                      rounded-lg text-center shadow-sm">
        <p className="text-[10px] font-semibold truncate">
          {node.name}
        </p>
        <p className="text-[9px] text-gray-500 truncate">
          {node.role}
        </p>
      </div>

   {node.children?.length > 0 && (
  <div className="flex flex-col items-center relative">

    {/* Vertical from parent */}
    <div className="w-px h-8 bg-gray-400"></div>

    {/* Children container */}
    <div className="relative inline-flex justify-center gap-12 pt-8">

      {/* Horizontal connector limited to children width */}
      {node.children.length > 1 && (
        <div className="absolute top-0 left-[calc(50%-50%)] right-[calc(50%-50%)] h-px bg-gray-400"></div>
      )}

      {node.children.map((child, index) => (
        <div key={index} className="flex flex-col items-center relative">

          {/* Vertical to child */}
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
