import OrgNode from "./OrgNode";

export default function OrgChart({ data }) {
  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="inline-flex min-w-full justify-center px-8">
        <OrgNode node={data} />
      </div>
    </div>
  );
}
