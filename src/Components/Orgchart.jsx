import OrgNode from "./OrgNode";

export default function OrgChart({ data }) {
  return (
    <div className="w-full flex justify-center overflow-x-auto py-10 bg-gray-50">
      <OrgNode node={data} level={0} />
    </div>
  );
}
