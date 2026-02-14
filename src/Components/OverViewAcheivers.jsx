const AchieverCard = ({ person }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">

      <img
        src={person.image}
        alt={person.name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-[#8B0000]"
      />

      <span className="inline-block mt-4 px-3 py-1 text-xs bg-[#8B0000] text-white rounded-full">
        {person.month}
      </span>

      <h3 className="mt-4 text-lg font-bold text-gray-800">
        {person.name}
      </h3>

      <p className="text-sm text-gray-500">
        {person.designation}
      </p>

      {person.subDepartment && (
        <p className="text-xs text-gray-400 mt-1">
          {person.subDepartment}
        </p>
      )}

      <p className="mt-3 text-sm font-medium text-gray-700">
        {person.award}
      </p>

      <p className="text-xs text-gray-400 mt-2">
        {person.department}
      </p>
    </div>
  );
};

export default AchieverCard;
