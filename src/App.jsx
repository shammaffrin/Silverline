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

import ProductDetails from "./Pages/ProductDetails"; // ⬅️ NEW IMPORT
import ScrollToTop from "./Components/Scrolltop";

import "./App.css";

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

          {/* ⭐ New Dynamic Product Details Route */}
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
