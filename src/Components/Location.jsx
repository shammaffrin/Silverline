import React from "react";
import { Builder, CreditCard, Delivery, Map, Support } from "../assets";

const features = [
  {
    title: "First Delivery",
    subtitle: "No one rejects,\n dislikes",
    icon: Delivery,
  },
  {
    title: "24/7 Support",
    subtitle: "We provide it\n anytime",
    icon: Support,
  },
  {
    title: "Online Payment",
    subtitle: "Secure and\n safe",
    icon: CreditCard,
  },
  {
    title: "On Time Delivery",
    subtitle: "We have the best\n planners",
    icon: Builder,
  },
];

// Add coordinates based on image layout
const locations = [
  {
    city: "Kuwait",
    address:
      "Office No 122, Building No 7474, Makkah Street,Block 11, Fahaheel, Kuwait.",
    email: "infodubai@silverlinerental.com",
    phone: "+971 4 576 2626",
    position: { top: "5.5%", left: "24.5%" },
  },
  {
    city: "Qatar",
    address: "Doha Industrial Area, Street 25, Zone 56, Qatar",
    email: "infoqatar@silverlinerental.com",
    phone: "+974 3 456 7890",
    position: { top: "40.3%", left: "37%" },
  },
  {
    city: "Oman",
    address: "Al Mawaleh South, Muscat, Oman",
    email: "infooman@silverlinerental.com",
    phone: "+968 2 345 6789",
    position: { top: "72%", left: "52%" },
  },
  {
    city: "Dubai",
    address: "P.O Box: 80478, Saih Shuaib-4, Dubai Industrial City, UAE",
    email: "infodubai@silverlinerental.com",
    phone: "+971 4 576 2626",
    position: { top: "54.8%", left: "45.2%" },
  },
  {
    city: "Saudi Arabia",
    address: "Riyadh 2nd Industrial City, Saudi Arabia",
    email: "infosaudi@silverlinerental.com",
    phone: "+966 5 678 9012",
    position: { top: "52.3%", left: "17.3%" },
  },
];

const Location = () => {
  return (
    <div className="bg-white">
      {/* <div className="relative">
        <img
          className="w-full h-[300px] sm:h-auto object-cover"
          src={Map}
          alt="Map"
        />

        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: loc.position.top, left: loc.position.left }}
          >
            <div className="group w-20 h-20 rounded-full cursor-pointer relative">
              <div className="absolute  left-1/2 -translate-x-1/2 w-60 bg-[#6b6b6b] p-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 text-sm white pointer-events-none">
                <p className="font-semibold">{loc.city}</p>
                <p>{loc.address}</p>
                <p className="text-[#8B0000]">{loc.email}</p>
                <p>{loc.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="w-full bg-amber-100 overflow-hidden relative">
        <div className="absolute w-full h-[60px] bg-white"></div>
        <iframe
          className="w-full h-[500px]"
          src="https://www.google.com/maps/d/embed?mid=1bZAGC9c8VMSSJIpMUzG0fGujiM6izbg&ehbc=2E312F&noprof=1"
        ></iframe>
      </div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-10 py-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-6 py-4 bg-[#b5b5b531] gap-4 rounded-xl"
          >
            <img className="w-14" src={item.icon} alt={item.title} />
            <div className="font-semibold">
              <p>{item.title}</p>
              <p className="text-[#00000080] whitespace-pre-line">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
