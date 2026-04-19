import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Overview from "./Pages/Overview";
import Career from "./Pages/Career";
import Apply from "./Pages/Apply";
import DepartmentPage from "./Pages/DepartmentPage";
import ProductDetails from "./Pages/ProductDetails";

// ✅ NEW IMPORT
import DepartmentPolicies from "./Pages/DepartmentPolicies";

import ScrollToTop from "./Components/Scrolltop";

import "./App.css";
import AnnouncementsPage from "./Pages/Announcement";
import Achiever from "./Pages/Achiever";
import JobsPage from "./Pages/JobsPage";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home */}
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <About />
              </motion.div>
            }
          />

          {/* Blog */}
          <Route
            path="/blog"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Blog />
              </motion.div>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Contact />
              </motion.div>
            }
          />

          {/* Products */}
          <Route
            path="/products"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Products />
              </motion.div>
            }
          />

          {/* Product Details */}
          <Route
            path="/product/:category/:sub/:index"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <ProductDetails />
              </motion.div>
            }
          />

          {/* Overview */}
          <Route
            path="/overview"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Overview />
              </motion.div>
            }
          />

          {/* Department Page */}
          <Route
            path="/overview/department/:dept"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <DepartmentPage />
              </motion.div>
            }
          />

          {/* ✅ NEW: Department Policies Page */}
          <Route
            path="/overview/policies/:department"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <DepartmentPolicies />
              </motion.div>
            }
          />

          <Route
            path="/overview/announcements"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <AnnouncementsPage />
              </motion.div>
            }
          />

          <Route
            path="/overview/achievers"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Achiever />
              </motion.div>
            }
          />

          <Route
            path="/overview/jobs"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <JobsPage />
              </motion.div>
            }
          />


          {/* Careers */}
          <Route
            path="/careers"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Career />
              </motion.div>
            }
          />

          {/* Apply */}
          <Route
            path="/apply"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Apply />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
