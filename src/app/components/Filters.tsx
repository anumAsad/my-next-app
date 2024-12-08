'use client'
import { useState } from "react";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";

export default function Filters() {
  const [openSections, setOpenSections] = useState<{
    price: boolean;
    colors: boolean;
    size: boolean;
    dressStyle: boolean;
  }>({
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  const toggleSection = (section: "price" | "colors" | "size" | "dressStyle") => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
      <div>
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Responsive Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Price */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <h3 className="font-semibold">Price</h3>
            {openSections.price ? (
              <ArrowDownIcon className="h-5 w-5" />
            ) : (
              <ArrowRightIcon className="h-5 w-5" />
            )}
          </div>
          {openSections.price && (
            <div className="mt-4">
              <input type="range" min="50" max="200" className="w-full" />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$50</span>
                <span>$200</span>
              </div>
            </div>
          )}
        </div>
        </div>
        <div>
        {/* Colors */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("colors")}
          >
            <h3 className="font-semibold">Colors</h3>
            {openSections.colors ? (
              <ArrowDownIcon className="h-5 w-5" />
            ) : (
              <ArrowRightIcon className="h-5 w-5" />
            )}
          </div>
          {openSections.colors && (
            <div className="mt-4 flex flex-wrap gap-2">
              {["green", "red", "orange", "blue", "pink", "black", "white"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full bg-${color}-500 cursor-pointer border ${
                      color === "blue" ? "border-black" : ""
                    }`}
                  ></div>
                )
              )}
            </div>
          )}
        </div>
        </div>
        <div>
        {/* Size */}
        <div>
          <div
            className="flex items-center grid-cols-2 justify-between cursor-pointer"
            onClick={() => toggleSection("size")}
          >
            <h3 className="font-semibold">Size</h3>
            {openSections.size ? (
              <ArrowDownIcon className="h-5 w-5" />
            ) : (
              <ArrowRightIcon className="h-5 w-5" />
            )}
          </div>
          {openSections.size && (
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "XX-Small",
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large",
                "3X-Large",
                "4X-Large",
              ].map((size, index) => (
                <div
                  key={index}
                  className={`px-4 py-1 rounded border ${
                    size === "Large" ? "bg-black text-white" : "text-gray-500"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
        <div>
        {/* Dress Style */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection("dressStyle")}
          >
            <h3 className="font-semibold">Dress Style</h3>
            {openSections.dressStyle ? (
              <ArrowDownIcon className="h-5 w-5" />
            ) : (
              <ArrowRightIcon className="h-5 w-5" />
            )}
          </div>
          {openSections.dressStyle && (
            <div className="mt-4 space-y-2">
              {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:underline text-gray-700"
                >
                  {style}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
      <div>
      {/* Apply Filter */}
      <div className="mt-6">
        <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          Apply Filter
        </button>
      </div>
    </div>
    </div>
  );
}
