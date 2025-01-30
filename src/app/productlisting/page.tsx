"use client";
import React, { useState } from "react";
import ChairsCategory from "../category/Chairs/page";
import CeramicCategory from "../category/Ceramics/page";
import CutleryCategory from "../category/Cutlery/page";
import PlantPotsCategory from "../category/Plantpots/page";
import TableCategory from "../category/Tables/page";
import TablewareCategory from "../category/Tableware/page";

const categories = [
  { name: "Chairs", component: <ChairsCategory /> },
  { name: "Tables", component: <TableCategory /> },
  { name: "Plant Pots", component: <PlantPotsCategory /> },
  { name: "Tableware", component: <TablewareCategory /> },
  { name: "Cutlery", component: <CutleryCategory /> },
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle Category Selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="px-4 md:px-8 py-12 font-[Clash Display] text-[#2A254B]">
      {/* Category Selection Button */}
      <div className="flex justify-center mb-8 relative">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-6 py-3 bg-[#4E4D93] text-white rounded-md shadow-md"
          >
            Category
          </button>

          {/* Dropdown Menu (Only Show if Open) */}
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-md w-48">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleCategorySelect(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Display Selected Category */}
      <div className="text-center">
        {categories
          .filter((cat) => cat.name === selectedCategory)
          .map((cat) => (
            <div key={cat.name}>{cat.component}</div>
          ))}
      </div>

      {/* Always Show Ceramics Category Below */}
      <div className="mt-12">
        <CeramicCategory />
      </div>
    </div>
  );
};

export default Page;
