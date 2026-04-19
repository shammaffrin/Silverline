import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import categoriesData from "../Data/productData";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductHero = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Mobile-specific state
  const [mobileView, setMobileView] = useState("categories"); // "categories" | "ranges" | "subs" | "products"

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const categories = Object.keys(categoriesData);
  const selectedData = selectedCategory
    ? categoriesData[selectedCategory]
    : null;

  const categoryFromURL = searchParams.get("category");

  useEffect(() => {
    if (categoryFromURL && categoriesData[categoryFromURL]) {
      setSelectedCategory(categoryFromURL);
      setSelectedRange(null);
      setSelectedSub(null);
      setMobileView("subs");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [categoryFromURL]);

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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ================= MOBILE HELPERS =================
  const mobileSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedRange(null);
    setSelectedSub(null);
    const data = categoriesData[cat];
    if (data?.type === "Capacity" && data?.ranges) {
      setMobileView("ranges");
    } else {
      setMobileView("subs");
    }
    scrollToTop();
  };

  const mobileSelectRange = (range) => {
    setSelectedRange(range);
    setSelectedSub(null);
    setMobileView("subs");
    scrollToTop();
  };

  const mobileSelectSub = (sub) => {
    setSelectedSub(sub);
    setMobileView("products");
    scrollToTop();
  };

  const mobileGoBack = () => {
    if (mobileView === "products") {
      setSelectedSub(null);
      if (selectedData?.type === "Capacity" && selectedData?.ranges) {
        setMobileView("subs");
      } else {
        setMobileView("subs");
      }
    } else if (mobileView === "subs") {
      setSelectedSub(null);
      if (selectedData?.type === "Capacity" && selectedData?.ranges) {
        setSelectedRange(null);
        setMobileView("ranges");
      } else {
        setSelectedCategory(null);
        setMobileView("categories");
      }
    } else if (mobileView === "ranges") {
      setSelectedRange(null);
      setSelectedCategory(null);
      setMobileView("categories");
    }
    scrollToTop();
  };

  const getMobileBreadcrumb = () => {
    const parts = ["All"];
    if (selectedCategory) parts.push(selectedCategory);
    if (selectedRange) parts.push(selectedRange);
    if (selectedSub) parts.push(selectedSub);
    return parts;
  };

  return (
    <div>
      <Navbar />

      {/* ================= DESKTOP (unchanged) ================= */}
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
                  <div
                    className={`cursor-pointer hover:bg-gray-300 text-sm pb-1 px-2 rounded ${
                      selectedCategory === cat
                        ? "font-bold py-1 bg-gray-200"
                        : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedRange(null);
                      setSelectedSub(null);
                      scrollToTop();
                    }}
                  >
                    {cat}
                  </div>

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
                              scrollToTop();
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
                    {item.image && (
                      <img
                        src={item.image}
                        className="h-32 w-full object-contain"
                      />
                    )}
                    <p className="text-center mt-2">
                      {item.brand || item.capacity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!showGlobal && !selectedCategory && (
            <div className="h-[70vh] flex items-center justify-center text-gray-500">
              Select a category to view products
            </div>
          )}

          {!showGlobal &&
            selectedCategory &&
            selectedData?.type === "Brand" && (
              <div className="grid grid-cols-3 gap-6">
                {Object.keys(selectedData.data).map((brand) => {
                  const firstItemWithImage = selectedData.data[brand]?.find(
                    (i) => i.image,
                  );
                  if (!firstItemWithImage) return null;
                  return (
                    <div
                      key={brand}
                      className="p-4 bg-white rounded shadow text-center cursor-pointer"
                      onClick={() => {
                        scrollToTop();
                        navigate(`/product/${selectedCategory}/${brand}/0`);
                      }}
                    >
                      <img
                        src={firstItemWithImage.image}
                        className="h-24 mx-auto"
                      />
                      <p className="mt-2">{brand}</p>
                    </div>
                  );
                })}
              </div>
            )}

          {!showGlobal &&
            selectedCategory &&
            selectedData?.type === "Capacity" && (
              <>
                {selectedData?.ranges ? (
                  <>
                    {!selectedRange && (
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(selectedData.ranges).map(
                          ([range, value]) => (
                            <div
                              key={range}
                              onClick={() => {
                                setSelectedRange(range);
                                setSelectedSub(null);
                                scrollToTop();
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

                    {selectedRange && !selectedSub && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {selectedData.ranges[selectedRange].capacities
                          .filter((cap) =>
                            selectedData.data[cap]?.some((item) => item.image),
                          )
                          .map((cap) => {
                            const firstItemWithImage = selectedData.data[
                              cap
                            ]?.find((item) => item.image);
                            return (
                              <div
                                key={cap}
                                onClick={() => {
                                  setSelectedSub(cap);
                                  scrollToTop();
                                }}
                                className="p-4 bg-white rounded-xl shadow cursor-pointer text-center"
                              >
                                <img
                                  src={firstItemWithImage.image}
                                  className="h-24 mx-auto object-contain mb-2"
                                />
                                <p className="font-semibold">{cap}</p>
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </>
                ) : (
                  !selectedSub && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {Object.keys(selectedData.data)
                        .filter((cap) =>
                          selectedData.data[cap]?.some((item) => item.image),
                        )
                        .map((cap) => {
                          const firstItemWithImage = selectedData.data[
                            cap
                          ]?.find((item) => item.image);
                          return (
                            <div
                              key={cap}
                              onClick={() => {
                                setSelectedSub(cap);
                                scrollToTop();
                              }}
                              className="p-4 bg-white rounded-xl shadow cursor-pointer text-center"
                            >
                              <img
                                src={firstItemWithImage.image}
                                className="h-24 mx-auto object-contain mb-2"
                              />
                              <p className="font-semibold">{cap}</p>
                            </div>
                          );
                        })}
                    </div>
                  )
                )}

                {selectedSub && (
                  <div>
                    <h3 className="mb-4 text-xl">{selectedSub}</h3>
                    <div className="grid grid-cols-3 gap-6">
                      {selectedData.data[selectedSub]?.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 bg-white rounded shadow cursor-pointer text-center"
                          onClick={() => {
                            scrollToTop();
                            navigate(
                              `/product/${selectedCategory}/${selectedSub}/${idx}`,
                            );
                          }}
                        >
                          {item.image && (
                            <img src={item.image} className="h-24 mx-auto" />
                          )}
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

      {/* ================= MOBILE (full flow) ================= */}
      <section className="md:hidden min-h-screen bg-gray-100 pt-24 pb-8">
        {/* Search bar */}
        <div className="px-4 mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim()) setMobileView("categories");
            }}
          />
        </div>

        {/* ── SEARCH RESULTS ── */}
        {showGlobal ? (
          <div className="px-4">
            <p className="text-sm text-gray-500 mb-3">
              {globalResults.length} result(s)
            </p>
            <div className="grid grid-cols-2 gap-3">
              {globalResults.length === 0 ? (
                <p className="col-span-2 text-center text-gray-400 mt-10">
                  No products found
                </p>
              ) : (
                globalResults.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-3 text-center cursor-pointer active:opacity-70"
                    onClick={() =>
                      navigate(
                        `/product/${item.category}/${item.subcategory}/${item.index}`,
                      )
                    }
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        className="h-20 w-full object-contain mb-2"
                        alt=""
                      />
                    )}
                    <p className="text-xs font-medium text-gray-700 truncate">
                      {item.brand || item.capacity}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {item.subcategory}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Breadcrumb + Back button */}
            {mobileView !== "categories" && (
              <div className="px-4 mb-3 flex items-center gap-2">
                <button
                  onClick={mobileGoBack}
                  className="flex items-center gap-1 text-sm text-gray-500 bg-white rounded-full px-3 py-1 border border-gray-200 active:opacity-70"
                >
                  <span>←</span> Back
                </button>
                <div className="flex items-center gap-1 text-xs text-gray-400 overflow-x-auto whitespace-nowrap">
                  {getMobileBreadcrumb().map((crumb, i, arr) => (
                    <span key={i} className="flex items-center gap-1">
                      <span
                        className={
                          i === arr.length - 1
                            ? "text-gray-700 font-medium"
                            : ""
                        }
                      >
                        {crumb}
                      </span>
                      {i < arr.length - 1 && <span>/</span>}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* ── VIEW: CATEGORIES ── */}
            {mobileView === "categories" && (
              <div className="px-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  Categories
                </p>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => {
                    const data = categoriesData[cat];
                    const allItems = Object.values(data.data).flat();
                    const firstImage = allItems.find((i) => i.image)?.image;

                    return (
                      <div
                        key={cat}
                        className="bg-white rounded-xl flex items-center gap-4 px-4 py-3 cursor-pointer active:opacity-70 border border-gray-100"
                        onClick={() => mobileSelectCategory(cat)}
                      >
                        {firstImage && (
                          <img
                            src={firstImage}
                            className="h-12 w-12 object-contain flex-shrink-0"
                            alt=""
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800">
                            {cat}
                          </p>
                          <p className="text-xs text-gray-400">
                            {Object.keys(data.data).length} items
                          </p>
                        </div>
                        <span className="text-gray-300 text-lg">›</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── VIEW: RANGES (Capacity with ranges) ── */}
            {mobileView === "ranges" &&
              selectedCategory &&
              selectedData?.ranges && (
                <div className="px-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                    Select Range
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(selectedData.ranges).map(
                      ([range, value]) => (
                        <div
                          key={range}
                          className="bg-white rounded-xl p-4 text-center cursor-pointer active:opacity-70 border border-gray-100"
                          onClick={() => mobileSelectRange(range)}
                        >
                          {value.image && (
                            <img
                              src={value.image}
                              className="h-16 mx-auto object-contain mb-2"
                              alt=""
                            />
                          )}
                          <p className="text-sm font-medium text-gray-700">
                            {range}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

            {/* ── VIEW: SUBS (capacities or brands) ── */}
            {mobileView === "subs" && selectedCategory && (
              <div className="px-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  {selectedData?.type === "Brand"
                    ? "Select Brand"
                    : "Select Capacity"}
                </p>

                {selectedData?.type === "Brand" ? (
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(selectedData.data).map((brand) => {
                      const firstItemWithImage = selectedData.data[brand]?.find(
                        (i) => i.image,
                      );
                      if (!firstItemWithImage) return null;
                      return (
                        <div
                          key={brand}
                          className="bg-white rounded-xl p-4 text-center cursor-pointer active:opacity-70 border border-gray-100"
                          onClick={() => {
                            scrollToTop();
                            navigate(`/product/${selectedCategory}/${brand}/0`);
                          }}
                        >
                          <img
                            src={firstItemWithImage.image}
                            className="h-16 mx-auto object-contain mb-2"
                            alt=""
                          />
                          <p className="text-sm font-medium text-gray-700">
                            {brand}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {(() => {
                      const capacities =
                        selectedData?.ranges && selectedRange
                          ? selectedData.ranges[selectedRange]?.capacities || []
                          : Object.keys(selectedData?.data || {});

                      return capacities
                        .filter((cap) =>
                          selectedData.data[cap]?.some((item) => item.image),
                        )
                        .map((cap) => {
                          const firstItemWithImage = selectedData.data[
                            cap
                          ]?.find((item) => item.image);
                          return (
                            <div
                              key={cap}
                              className="bg-white rounded-xl p-4 text-center cursor-pointer active:opacity-70 border border-gray-100"
                              onClick={() => mobileSelectSub(cap)}
                            >
                              <img
                                src={firstItemWithImage.image}
                                className="h-16 mx-auto object-contain mb-2"
                                alt=""
                              />
                              <p className="text-sm font-medium text-gray-700">
                                {cap}
                              </p>
                            </div>
                          );
                        });
                    })()}
                  </div>
                )}
              </div>
            )}

            {/* ── VIEW: PRODUCTS ── */}
            {mobileView === "products" && selectedSub && selectedData && (
              <div className="px-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-3 font-medium">
                  {selectedSub}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {selectedData.data[selectedSub]?.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 text-center cursor-pointer active:opacity-70 border border-gray-100"
                      onClick={() => {
                        scrollToTop();
                        navigate(
                          `/product/${selectedCategory}/${selectedSub}/${idx}`,
                        );
                      }}
                    >
                      {item.image && (
                        <img
                          src={item.image}
                          className="h-20 mx-auto object-contain mb-2"
                          alt=""
                        />
                      )}
                      <p className="text-sm font-medium text-gray-700">
                        {item.brand || item.capacity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ProductHero;
