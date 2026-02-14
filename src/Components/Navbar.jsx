import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons
import LoginModal from "./LoginModal";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "CAREERS", path: "/careers" },
    { name: "BLOG", path: "/blog" },
    ...(isLoggedIn ? [{ name: "OVERVIEW", path: "/overview" }] : []),
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div
        className="absolute z-50 w-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center px-4 md:px-10 pt-1">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
          >
            <a href="/">
              <img className="w-26 sm:w-34" src={Logo} alt="Brand Logo" />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:block md:fixed top-10 left-1/2 transform -translate-x-1/2">
            <nav>
              <ul className="flex gap-2 text-white font-light text-sm bg-[#00000040] backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    className={`${
                      location.pathname === item.path
                        ? "bg-[#8B0000]"
                        : "bg-transparent"
                    } px-4 py-2 rounded-full transition duration-100`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop Login/Logout */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <button
                className="text-white text-sm font-light px-6 py-2 rounded-full bg-[#8B0000] hover:bg-white hover:text-[#8B0000] transition duration-200"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            ) : (
              <button
                className="text-white text-sm font-light px-6 py-2 border rounded-full hover:bg-[#8B0000] border-white/20 transition duration-200"
                onClick={handleLoginClick}
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>

        {/* Mobile Dropdown Menu with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="md:hidden bg-black/90 backdrop-blur-sm absolute top-20 w-full left-0 px-6 py-4 z-40"
            >
              <ul className="flex flex-col gap-4 text-white text-sm">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`${
                        location.pathname === item.path ? "text-[#8B0000]" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * navItems.length, duration: 0.3 }}
                >
                  {isLoggedIn ? (
                    <button
                      className="w-full text-left text-white py-2"
                      onClick={() => {
                        handleLogoutClick();
                        setMenuOpen(false);
                      }}
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      className="w-full text-left text-white py-2"
                      onClick={() => {
                        handleLoginClick();
                        setMenuOpen(false);
                      }}
                    >
                      Login
                    </button>
                  )}
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Login Modal */}
      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Navbar;
