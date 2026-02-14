import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import categoriesData from "../Data/productData";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductHero = () => {
  const [selectedCategory, setSelectedCategory] = useState("Generators");
  const [selectedSub, setSelectedSub] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState("Generators");

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const categories = Object.keys(categoriesData);
  const selectedData = selectedCategory ? categoriesData[selectedCategory] : null;

  // Auto-select first sub when category changes
  useEffect(() => {
    if (selectedData) {
      const subs = Object.keys(selectedData.data);
      setSelectedSub(subs.length > 0 ? subs[0] : null);
    }
  }, [selectedCategory]);

  const toggleCategory = (cat) => {
    if (expandedCategory === cat) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(cat);
      setSelectedCategory(cat);
    }
  };

  // ============================================================
  //   GLOBAL SEARCH ACROSS ALL CATEGORIES & SUBCATEGORIES
  // ============================================================
  const globalResults = [];

  if (searchQuery.trim().length > 0) {
    const q = searchQuery.toLowerCase();

    categories.forEach((cat) => {
      Object.keys(categoriesData[cat].data).forEach((sub) => {
        categoriesData[cat].data[sub].forEach((item, idx) => {
          const text = `${item.brand} ${item.capacity}`.toLowerCase();
          if (text.includes(q)) {
            globalResults.push({
              ...item,
              category: cat,
              subcategory: sub,
              index: idx,
            });
          }
        });
      });
    });
  }

  const showGlobal = searchQuery.trim().length > 0;

  return (
    <div>
      <Navbar />

      {/* ===========================================================
          DESKTOP LAYOUT
      ============================================================ */}
      <section className="hidden md:flex w-full min-h-[100vh] bg-[#eee] pt-30">
        {/* Sidebar */}
        <div className="w-1/4 p-4">

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search by brand or capacity..."
            className="w-full px-3 py-2 mb-4 rounded-full border border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />

          {/* Hide categories when global search is active */}
          {!showGlobal && (
            <ul>
              {categories.map((cat) => (
                <li key={cat} className="mb-2">
                  <div
                    className={`flex justify-between items-center cursor-pointer p-1 rounded hover:bg-gray-200 ${
                      selectedCategory === cat ? "font-bold" : ""
                    }`}
                    onClick={() => toggleCategory(cat)}
                  >
                    <span>{cat}</span>
                    {expandedCategory === cat ? (
                      <FiMinus className="text-sm" />
                    ) : (
                      <FiPlus className="text-sm" />
                    )}
                  </div>

                  {expandedCategory === cat && (
                    <div className="ml-3 mt-2 flex flex-wrap gap-2">
                      {Object.keys(categoriesData[cat].data).map((sub) => (
                        <div
                          key={sub}
                          className={`text-xs cursor-pointer text-center px-2 py-2 rounded border transition-all w-[45%] lg:w-[30%] ${
                            selectedSub === sub
                              ? "bg-gray-300 font-semibold border-gray-400"
                              : "hover:bg-gray-200 border-gray-200"
                          }`}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setSelectedSub(sub);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">

          {/* =====================================================
              GLOBAL SEARCH RESULTS (DESKTOP)
          ===================================================== */}
          {showGlobal && (
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Search Results ({globalResults.length})
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {globalResults.length === 0 && (
                  <p className="text-gray-500">No items found...</p>
                )}

                {globalResults.map((item, i) => (
                  <div
                    key={i}
                    className="rounded p-4 text-center bg-[#ece5e5] transition cursor-pointer hover:shadow-lg"
                    onClick={() =>
                      navigate(
                        `/product/${item.category}/${item.subcategory}/${item.index}`
                      )
                    }
                  >
                    <img
                      src={item.image}
                      className="w-full h-32 object-contain mb-2"
                    />
                    <p className="font-medium">{item.brand || item.capacity}</p>
                    <p className="text-xs text-gray-600">
                      {item.category} › {item.subcategory}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================
              NORMAL CATEGORY VIEW (DESKTOP)
          ===================================================== */}
          {!showGlobal &&
            selectedData &&
            selectedSub &&
            selectedData.data[selectedSub] && (
              <div>
                <h3 className="text-xl font-semibold mb-4">{selectedSub}</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {selectedData.data[selectedSub].map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded p-4 text-center bg-[#ece5e5] transition cursor-pointer hover:shadow-lg"
                      onClick={() =>
                        navigate(
                          `/product/${selectedCategory}/${selectedSub}/${idx}`
                        )
                      }
                    >
                      <img
                        src={item.image}
                        alt={item.brand}
                        className="w-full h-32 object-contain mb-2"
                      />
                      <p className="font-medium">{item.brand}</p>
                    </div>
                  ))}
                </div>

                {selectedData.description && (
                  <p className="mt-6 text-gray-700">
                    {selectedData.description}
                  </p>
                )}
              </div>
            )}
        </div>
      </section>

      {/* ===========================================================
          MOBILE LAYOUT
      ============================================================ */}
      <section className="flex flex-col md:hidden w-full min-h-screen bg-[#f5f5f5] px-4 pt-32 pb-10 gap-6">
        
        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search by brand or capacity..."
          className="w-full px-3 py-2 rounded-full border border-gray-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />

        {/* =====================================================
            GLOBAL SEARCH RESULTS (MOBILE)
        ===================================================== */}
        {showGlobal && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {globalResults.length === 0 && (
              <p className="text-gray-500">No items found...</p>
            )}

            {globalResults.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-3 shadow-md flex flex-col items-center cursor-pointer"
                onClick={() =>
                  navigate(
                    `/product/${item.category}/${item.subcategory}/${item.index}`
                  )
                }
              >
                <img src={item.image} className="w-full h-24 object-contain mb-2" />
                <p className="text-sm font-semibold text-center">{item.brand}</p>
                <p className="text-[10px] text-gray-500">
                  {item.category} › {item.subcategory}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* =====================================================
            NORMAL CATEGORY VIEW (MOBILE)
        ===================================================== */}
        {!showGlobal && (
          <>
            {/* CATEGORY SELECT */}
            <div className="relative w-full">
              <select
                className="w-full appearance-none px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-700 shadow-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 text-sm">
                ▼
              </div>
            </div>

            {/* SUBCATEGORY SCROLL */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {selectedData &&
                Object.keys(selectedData.data).map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSub(sub)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition border ${
                      selectedSub === sub
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-600 border-gray-300"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
            </div>

            {/* PRODUCTS */}
            {selectedData &&
              selectedSub &&
              selectedData.data[selectedSub] && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {selectedData.data[selectedSub].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-3 shadow-md flex flex-col items-center cursor-pointer"
                      onClick={() =>
                        navigate(
                          `/product/${selectedCategory}/${selectedSub}/${idx}`
                        )
                      }
                    >
                      <img
                        src={item.image}
                        className="w-full h-24 object-contain mb-2"
                      />
                      <p className="text-sm font-semibold text-center">
                        {item.brand}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            {selectedData?.description && (
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {selectedData.description}
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ProductHero;
