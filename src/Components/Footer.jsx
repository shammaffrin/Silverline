import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#B5B5B51A] px-6 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Industries */}
        <div>
          <h3 className="font-bold uppercase mb-2">Industries We Serve</h3>
          <hr className="mb-3 border-[#B5B5B5]" />
          <ul className="space-y-1 font-light text-sm">
            <li>
              <Link to="/about#industries" className="hover:underline">
                Construction
              </Link>
            </li>
            <li>
              <Link to="/about#industries" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/about#industries" className="hover:underline">
                Facility Management
              </Link>
            </li>
            <li>
              <Link to="/about#industries" className="hover:underline">
                Marine And Ports
              </Link>
            </li>
            <li>
              <Link to="/about#industries" className="hover:underline">
                Oil And Gas
              </Link>
            </li>
            <li>
              <Link to="/about#industries" className="hover:underline">
                Utilities
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold uppercase mb-2">Navigation</h3>
          <hr className="mb-3 border-[#B5B5B5]" />
          <ul className="space-y-1 font-light text-sm">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold uppercase mb-2">Social Links</h3>
          <hr className="mb-3 border-gray-300" />
          <ul className="space-y-1 font-light text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <a
                href="https://www.instagram.com/silverline_rental/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <a
                href="https://www.facebook.com/SILVERLINE.RENTAL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaFacebookF /> Facebook
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <a
                href="http://www.youtube.com/@silverlinerental3312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-center md:text-left text-sm">
        <div className="font-bold text-xl">
          <p className="text-3xl font-extrabold">© 2025</p>
          <p className="text-3xl font-extrabold">SILVER LINE GROUP</p>
        </div>

        <button
          className="bg-black text-white text-lg cursor-pointer rounded-full p-5 hover:bg-gray-800 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
