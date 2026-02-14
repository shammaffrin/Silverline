import React from "react";
import { Kuwaitflag, Omanflag, Qatarflag, SaudiArabiaflag, UAEflag } from "../assets";

const addresses = [
  {
    city: "Dubai",
    address: "P.O Box: 80478, Saih Shuaib-4, Dubai Industrial City, UAE",
    email: "infodubai@silverlinerental.com",
    phone: "+971 4 576 2626",
    flag: UAEflag,
  },
  {
    city: "Qatar",
    address: "Doha Industrial Area, Street 25, Zone 56, Qatar",
    email: "infoqatar@silverlinerental.com",
    phone: "+974 3 456 7890",
    flag: Qatarflag,
  },
  {
    city: "Oman",
    address: "Al Mawaleh South, Muscat, Oman",
    email: "infooman@silverlinerental.com",
    phone: "+968 2 345 6789",
    flag: Omanflag,
  },
  {
    city: "Bahrain",
    address: "Hidd Industrial Area, Manama, Bahrain",
    email: "infobahrain@silverlinerental.com",
    phone: "+973 1 234 5678",
    flag: Kuwaitflag,
  },
  {
    city: "Saudi Arabia",
    address: "Riyadh 2nd Industrial City, Saudi Arabia",
    email: "infosaudi@silverlinerental.com",
    phone: "+966 5 678 9012",
    flag: SaudiArabiaflag,
  },
];

const Address = () => {
  return (
    <div className="py-8 px-4">
      <h3 className="text-2xl font-semibold mb-6 text-center">Visit Us</h3>
      <div className="flex flex-col md:flex-row md:justify-between max-w-full gap-4">
        {addresses.map(({ city, address, email, phone, flag }) => (
          <div
            key={city}
            className="flex-shrink-0 hover:scale-105 transition duration-200 md:w-[18%] bg-gray-200 rounded-lg shadow-md p-4"
          >
            <img
              src={flag}
              alt={`${city} Flag`}
              className="w-10 h-6 object-cover rounded-sm mb-3"
            />
            <h2 className="text-lg font-semibold mb-1">{city}</h2>
            <p className="text-xs mb-1 leading-snug">{address}</p>
            <p className="text-xs mb-1">
              <strong>Email:</strong> {email}
            </p>
            <p className="text-xs">
              <strong>Phone:</strong> {phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
