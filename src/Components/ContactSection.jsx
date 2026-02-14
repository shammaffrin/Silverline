import React from "react";
import { Email, LocationPin, Phone, Related2 } from "../assets";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="bg-white px-2 py-12 md:px-20 lg:px-20">
      <h2 className="text-xl font-bold text-center mb-2">
        Contact our friendly team
      </h2>
      <p className="text-center text-gray-500 mb-20">
        Let us know how we can help.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Form */}
        <form className="space-y-6">
          <h3 className="text-3xl font-semibold">Get in Touch with Us</h3>
          <div>
            <label className="block font-normal mb-1">
              Your name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="What should we call you?"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block font-normal mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block font-normal mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Company name?"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block font-normal mb-1">
              User <span className="text-red-500">*</span>
            </label>
            <select className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-400">
              <option>Customer</option>
              <option>Partner</option>
              <option>Vendor</option>
            </select>
          </div>

          <div>
            <label className="block font-normal mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message here"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          <div className="flex justify-center items-center group">
            <Link to="/products">
              <p className="bg-[#8B0000] px-6 py-2 rounded-full hover:scale-105 transition ease-in-out text-white text-sm">
                Submit
              </p>
            </Link>
          </div>
        </form>

        {/* Right Side - Info */}
        <div className="space-y-6">
          <img
            src={Related2}
            alt="Silver Line Rental"
            className="rounded-lg object-cover w-full h-[300px] shadow"
          />
          <div>
            <h4 className="text-xl font-semibold mt-10 mb-4">Information</h4>
            <div className="flex items-center gap-5">
              <img className="w-4 h-4" src={LocationPin} alt="" />
              <p className="mb-2 font-light">
                P.O Box: 80478, Saih Shuaib-4,
                <br /> Dubai Industrial City, UAE
              </p>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-4 h-4" src={Phone} alt="" />
              <p className="mb-2 font-light">
                +971 4576 2626
                <br />
                +971 50140 6565
              </p>
            </div>
            <div className="flex items-center gap-5">
              <img className="w-4 h-4" src={Email} alt="" />
              <p className="mb-2 font-light">infodubai@silverlinerental.com<br />silverline121@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
