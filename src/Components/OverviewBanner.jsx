import React from "react";

const Card = ({ image, name, role, dark }) => {
  return (
    <div className="flex items-center shadow-md">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover"
      />
      <div
        className={`px-6 py-4 ${
          dark ? "bg-[#4a4346] text-white" : "bg-gray-400 text-white"
        }`}
      >
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm opacity-90">({role})</p>
      </div>
    </div>
  );
};

export default function ManagementChart() {
  return (
    <div className="w-full bg-gray-100 py-20 px-10 overflow-x-auto">

      <h2 className="text-3xl font-bold text-[#8b2c2c] mb-20 border-b-2 border-[#8b2c2c] inline-block">
        MANAGEMENT
      </h2>

      <div className="flex flex-col items-center">

        {/* MD */}
        <Card
          image="/md.jpg"
          name="Managing Director"
          role="MD"
          dark
        />

        {/* Vertical Line */}
        <div className="w-px h-16 bg-gray-500"></div>

        {/* Horizontal Line */}
        <div className="relative w-[700px] h-px bg-gray-500">

          {/* 3 drop lines */}
          <div className="absolute left-[0] top-0 w-px h-16 bg-gray-500"></div>
          <div className="absolute left-[50%] top-0 w-px h-16 bg-gray-500"></div>
          <div className="absolute left-[100%] top-0 w-px h-16 bg-gray-500"></div>
        </div>

        {/* Second Row */}
        <div className="flex justify-between w-[1000px] mt-16">

          {/* Person 1 (Has Child) */}
          <div className="flex flex-col items-center">

            <Card
              image="/person1.jpg"
              name="Chief of Staff"
              role="Manager"
              dark
            />

            {/* Child Connector */}
            <div className="w-px h-12 bg-gray-500"></div>

            <Card
              image="/assistant.jpg"
              name="Executive Assistant"
              role="Assistant"
            />
          </div>

          {/* Person 2 */}
          <div className="flex flex-col items-center">
            <Card
              image="/person2.jpg"
              name="Business Manager"
              role="Manager"
              dark
            />
          </div>

          {/* Person 3 */}
          <div className="flex flex-col items-center">
            <Card
              image="/person3.jpg"
              name="Operations Head"
              role="Manager"
              dark
            />
          </div>

        </div>
      </div>
    </div>
  );
}
