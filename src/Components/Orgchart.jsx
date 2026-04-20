import OrgNode from "./OrgNode";

export default function OrgChart({ data }) {
  return (
    <div className="w-full overflow-x-auto py-10">
      {" "}
      {/* ← add overflow-x-auto */}
      <div className="inline-flex min-w-full justify-center px-16">
        {" "}
        {/* ← inline-flex + min-w-full + px-16 */}
        <OrgNode node={data} />
      </div>
    </div>
  );
}
