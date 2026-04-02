import React, { useState } from "react";
import Navbar from "./Navbar";
import categoriesData from "../Data/productData";
import { useNavigate } from "react-router-dom";

const ProductHero = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const categories = Object.keys(categoriesData);
  const selectedData = selectedCategory
    ? categoriesData[selectedCategory]
    : null;

  // ================= GLOBAL SEARCH =================
  const globalResults = [];

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();

    categories.forEach((cat) => {
      Object.keys(categoriesData[cat].data).forEach((sub) => {
        categoriesData[cat].data[sub].forEach((item, idx) => {
          const text = Object.values(item).join(" ").toLowerCase();
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

      {/* ================= DESKTOP ================= */}
      <section className="hidden md:flex w-full min-h-[100vh] bg-[#eee] pt-30">
        {/* SIDEBAR */}
        <div className="w-1/4 p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1 mb-4 rounded-full border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {!showGlobal && (
            <ul>
              {categories.map((cat) => (
                <li key={cat} className="mb-1">
                  {/* CATEGORY */}
                  <div
                    className={`cursor-pointer hover:bg-gray-300 text-sm pb-1 px-2 rounded ${
                      selectedCategory === cat ? "font-bold py-1 bg-gray-200" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedRange(null); // 👈 reset so sidebar stays closed
                      setSelectedSub(null);
                    }}
                  >
                    {cat}
                  </div>

                  {/* RANGE DROPDOWN (ONLY AFTER RANGE SELECTED) */}
                  {selectedCategory === cat &&
                    selectedData?.type === "Capacity" &&
                    selectedData?.ranges &&
                    selectedRange && (
                      <div className="ml-3 mt-1">
                        {Object.keys(selectedData.ranges).map((range) => (
                          <div
                            key={range}
                            className={`text-xs cursor-pointer py-1 hover:underline ${
                              selectedRange === range ? "font-semibold" : ""
                            }`}
                            onClick={() => {
                              setSelectedRange(range);
                              setSelectedSub(null);
                            }}
                          >
                            {range}
                          </div>
                        ))}
                      </div>
                    )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6">
          {/* ===== SEARCH RESULTS ===== */}
          {showGlobal && (
            <div>
              <h3 className="text-xl mb-4">Results ({globalResults.length})</h3>

              <div className="grid grid-cols-3 gap-6">
                {globalResults.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded shadow cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/product/${item.category}/${item.subcategory}/${item.index}`,
                      )
                    }
                  >
                    <img
                      src={item.image}
                      className="h-32 w-full object-contain"
                    />
                    <p className="text-center mt-2">
                      {item.brand || item.capacity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== EMPTY STATE ===== */}
          {!showGlobal && !selectedCategory && (
            <div className="h-[70vh] flex items-center justify-center text-gray-500">
              Select a category to view products
            </div>
          )}

          {/* ===== BRAND TYPE ===== */}
          {!showGlobal &&
            selectedCategory &&
            selectedData?.type === "Brand" && (
              <div className="grid grid-cols-3 gap-6">
                {Object.keys(selectedData.data).map((brand) => (
                  <div
                    key={brand}
                    className="p-4 bg-white rounded shadow text-center cursor-pointer"
                    onClick={() =>
                      navigate(`/product/${selectedCategory}/${brand}/0`)
                    }
                  >
                    <img
                      src={selectedData.data[brand][0].image}
                      className="h-24 mx-auto"
                    />
                    <p className="mt-2">{brand}</p>
                  </div>
                ))}
              </div>
            )}

          {/* ===== CAPACITY TYPE ===== */}
          {!showGlobal &&
            selectedCategory &&
            selectedData?.type === "Capacity" && (
              <>
                {/* STEP 1: RANGES */}
                {!selectedRange && (
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(selectedData.ranges).map(
                      ([range, value]) => (
                        <div
                          key={range}
                          onClick={() => {
                            setSelectedRange(range); // 👈 triggers sidebar dropdown
                            setSelectedSub(null);
                          }}
                          className="p-6 bg-white rounded shadow cursor-pointer text-center"
                        >
                          <img src={value.image} className="h-24 mx-auto" />
                          <p className="mt-2 font-semibold">{range}</p>
                        </div>
                      ),
                    )}
                  </div>
                )}

                {/* STEP 2: CAPACITIES */}
                {selectedRange && !selectedSub && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {selectedData.ranges[selectedRange].capacities.map(
                      (cap) => {
                        const firstItem = selectedData.data[cap]?.[0];

                        return (
                          <div
                            key={cap}
                            onClick={() => setSelectedSub(cap)}
                            className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
                          >
                            {firstItem && (
                              <img
                                src={firstItem.image}
                                alt={cap}
                                className="h-24 mx-auto object-contain mb-2"
                              />
                            )}

                            <p className="font-semibold">{cap}</p>
                          </div>
                        );
                      },
                    )}
                  </div>
                )}

                {/* STEP 3: PRODUCTS */}
                {selectedSub && (
                  <div>
                    <h3 className="mb-4 text-xl">{selectedSub}</h3>

                    <div className="grid grid-cols-3 gap-6">
                      {selectedData.data[selectedSub]?.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-white rounded shadow cursor-pointer text-center"
                          onClick={() =>
                            navigate(
                              `/product/${selectedCategory}/${selectedSub}/${idx}`,
                            )
                          }
                        >
                          <img src={item.image} className="h-24 mx-auto" />
                          <p className="mt-2">{item.brand}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
        </div>
      </section>

      {/* ================= MOBILE ================= */}
      <section className="md:hidden p-4 pt-28">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 mb-4 rounded-full border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {showGlobal ? (
          <div className="grid grid-cols-2 gap-4">
            {globalResults.map((item, i) => (
              <div key={i} className="p-3 bg-white rounded shadow text-center">
                <img src={item.image} className="h-20 mx-auto" />
                <p>{item.brand || item.capacity}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Mobile flow can be enhanced next 🚀
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductHero;
