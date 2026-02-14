import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";

// Same imports...

const LoginModal = ({ show, onClose, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const envUser = import.meta.env.VITE_LOGIN_USERNAME;
    const envPass = import.meta.env.VITE_LOGIN_PASSWORD;

    if (email === envUser && password === envPass) {
      localStorage.setItem("isLoggedIn", "true");
      onSuccess();
      onClose();
      navigate("/overview");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black text-white flex flex-col items-center p-8 mx-4 w-full max-w-lg relative rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={onClose}
              aria-label="Close login modal"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-2">Login</h2>
            <p className="mb-6 text-sm font-light text-[#FFFFFFBF] text-center">
              Hey, Enter your details to sign in<br /> to your account
            </p>

            {/* Inputs */}
            <input
              className="w-full bg-white/5 border border-white/20 text-white px-4 py-2 mb-4 rounded-md outline-none"
              type="text"
              placeholder="Enter your email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full bg-white/5 border border-white/20 text-white px-4 py-2 mb-6 rounded-md outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Button Row */}
            <div className="flex items-center group">
              <button onClick={handleLogin} aria-label="Sign in">
                <p className="bg-[#8B0000] px-6 py-2 rounded-full text-white text-sm">
                  Sign In
                </p>
              </button>
              <button onClick={handleLogin} aria-label="Sign in arrow">
                <p className="bg-white p-2 rounded-full text-black text-lg transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 ease-in-out">
                  <CgArrowTopRight />
                </p>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
