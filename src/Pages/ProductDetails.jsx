import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoriesData from "../Data/productData";
import Navbar from "../Components/Navbar";

const ProductDetails = () => {
  const { category, sub, index } = useParams();
  const navigate = useNavigate();

  const itemIndex = parseInt(index, 10);

  const categoryData = categoriesData[category];
  if (!categoryData)
    return <p className="p-10 text-red-600">Invalid category.</p>;

  const subData = categoryData.data[sub];
  if (!subData)
    return <p className="p-10 text-red-600">Invalid subcategory.</p>;

  const product = subData[itemIndex];
  if (!product) return <p className="p-10 text-red-600">Product not found.</p>;

  // ================= ALL PRODUCTS (FROM ALL CATEGORIES) =================
  const allProducts = [];

  Object.keys(categoriesData).forEach((cat) => {
    Object.keys(categoriesData[cat].data).forEach((subKey) => {
      categoriesData[cat].data[subKey].forEach((item, idx) => {
        // ✅ ONLY include products WITH image
        if (item.image) {
          allProducts.push({
            category: cat,
            sub: subKey,
            item,
            index: idx,
          });
        }
      });
    });
  });

  // ================= RELATED PRODUCTS =================
  const relatedProducts = allProducts
    .filter(
      (p) =>
        !(p.category === category && p.sub === sub && p.index === itemIndex),
    )
    .sort(() => 0.5 - Math.random()) // 🔀 shuffle
    .slice(0, 4); // limit

  const whatsappNumber = "+971501406565";
  const whatsappMsg = `Hello, I'm interested in the product: ${
    product.brand || sub
  }`;

  return (
    <div>
      <Navbar />

      <div className="p-5 md:p-10 pt-32 md:pt-38 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 capitalize">
          {sub}
        </h1>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            {product.image && (
              <img
                src={product.image}
                alt={product.brand || product.capacity}
                className="w-full h-64 md:h-[350px] object-contain rounded-lg bg-white shadow"
              />
            )}
          </div>

          {/* Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              {product.brand || product.capacity}
            </h2>

            <p className="text-gray-700 mb-6 text-sm md:text-base">
              {categoryData.description || "No description available."}
            </p>

            <h3 className="text-lg font-bold mb-2">Other Options</h3>
            <ul className="list-disc pl-6 text-sm md:text-base">
              {subData.map((item, i) => (
                <li key={i}>{item.brand || item.capacity}</li>
              ))}
            </ul>

            {/* Contact Sales */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMsg,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-[#8B0000] hover:bg-[#700000] text-white px-6 py-3 rounded-lg font-semibold text-center w-full md:w-auto"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4">Related Products</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp, i) => (
              <div
                key={i}
                className="p-3 md:p-4 bg-white shadow rounded cursor-pointer hover:shadow-lg transition"
                onClick={() =>
                  navigate(`/product/${rp.category}/${rp.sub}/${rp.index}`)
                }
              >
                <img
                  src={rp.item.image}
                  alt=""
                  className="w-full h-20 md:h-24 object-contain mb-2"
                />
                <p className="text-xs md:text-sm font-medium">
                  {rp.item.brand || rp.sub}
                </p>
                <p className="text-[10px] md:text-xs text-gray-500">
                  {rp.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
