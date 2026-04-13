import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import LoginModal from "./LoginModal";

const LoginNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLoginClick = () => setShowLogin(true);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/overview");
  };

  // 🔥 helper to convert text → URL slug
  const slugify = (text) =>
    text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

  // ✅ Nav Items with routes
  const navItems = [
    { name: "HOME", path: "/overview" },

    {
      name: "DEPARTMENT",
      dropdown: [
        "People & Culture",
        "Administration",
        "IT & Tech",
        "Finance",
        "Inventory",
        "Sales",
        "Collections",
        "Invoice",
        "Operations",
      ].map((item) => ({
        name: item,
        path: `/overview/department/${slugify(item)}`,
      })),
    },

    {
      name: "POLICIES",
      dropdown: ["General Policy", "Department-wise Policy"].map((item) => ({
        name: item,
        path: `/overview/policies/${slugify(item)}`,
      })),
    },

    {
      name: "SOP",
      dropdown: ["SOP 1", "SOP 2"].map((item) => ({
        name: item,
        path: `/overview/sop/${slugify(item)}`,
      })),
    },

    {
      name: "FORMS",
      dropdown: ["Form 1", "Form 2"].map((item) => ({
        name: item,
        path: `/overview/forms/${slugify(item)}`,
      })),
    },

    { name: "ANNOUNCEMENTS", path: "/overview/announcements" },
    { name: "ACHIEVERS", path: "/overview/achievers" },
    { name: "JOBS", path: "/overview/jobs" },
  ];

  return (
    <>
      <motion.div
        className="absolute z-50 w-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center px-4 md:px-10 pt-1">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <Link to="/">
              <img className="w-26 sm:w-34" src={Logo} alt="Brand Logo" />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:block md:fixed top-10 left-1/2 transform -translate-x-1/2">
            <ul className="flex gap-1 text-white font-light text-xs bg-[#00000040] backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {/* Main Item */}
                  <motion.li
                    className={`px-4 py-2 rounded-full cursor-pointer ${
                      location.pathname === item.path
                        ? "bg-[#8B0000]"
                        : "bg-transparent"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.path ? (
                      <Link to={item.path}>{item.name}</Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </motion.li>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div className="absolute hidden group-hover:block top-[36px] left-0 bg-black/90 backdrop-blur-md rounded-lg p-3 min-w-[200px] z-50">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block text-white text-sm py-1 hover:text-[#8B0000]"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>

          {/* Login / Logout */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <button
                onClick={handleLogoutClick}
                className="text-white text-sm px-6 py-2 rounded-full bg-[#8B0000] hover:bg-white hover:text-[#8B0000]"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLoginClick}
                className="text-white text-sm px-6 py-2 border rounded-full border-white/20 hover:bg-[#8B0000]"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Icon */}
          <div
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4 }}
              className="md:hidden bg-black/90 backdrop-blur-sm absolute top-20 w-full left-0 px-6 py-4 z-40"
            >
              {navItems.map((item, index) => (
                <div key={index}>
                  {/* Main */}
                  <div
                    className="flex justify-between items-center py-2 text-white cursor-pointer"
                    onClick={() =>
                      item.dropdown
                        ? setOpenDropdown(openDropdown === index ? null : index)
                        : setMenuOpen(false)
                    }
                  >
                    {item.path ? (
                      <Link to={item.path}>{item.name}</Link>
                    ) : (
                      <span>{item.name}</span>
                    )}
                    {item.dropdown && <span>+</span>}
                  </div>

                  {/* Dropdown */}
                  {item.dropdown && openDropdown === index && (
                    <div className="pl-4">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          onClick={() => setMenuOpen(false)}
                          className="block text-gray-300 text-sm py-1"
                        >
                          - {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Login/Logout */}
              <div className="mt-4">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogoutClick();
                      setMenuOpen(false);
                    }}
                    className="text-white py-2"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleLoginClick();
                      setMenuOpen(false);
                    }}
                    className="text-white py-2"
                  >
                    Login
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default LoginNavbar;
