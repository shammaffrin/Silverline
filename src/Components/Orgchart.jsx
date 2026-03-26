import OrgNode from "./OrgNode";

export default function OrgChart({ data }) {
  return (
    <div className="w-full  py-10 ">
      <div className="flex justify-center">
        <div className="inline-block min-w-max">
          <OrgNode node={data} />
        </div>
      </div>
    </div>
  );
}