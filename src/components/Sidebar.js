import React from "react";
import { categories } from "../utils/Constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <div className="ml-2 h-full  p-3 ">
    <h3 className="font-medium text-base px-3 py-1.5 leading-10 sidebar h-10">Explore</h3>
    {categories.map((category) => (
      <button
        className="w-full h-12 px-5 py-2 my-5 hover:bg-gray-100 rounded-xl"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#dadada",
          color: "black",
        }}
        key={category.name}
      >
      <div className="w-full h-full flex justify-around">
        <span className="w-1/6" style={{ color: category.name === selectedCategory ? "black" : "black", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span className="w-5/6 sidebar" style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </div>
      </button>
    ))}
  </div>
);

export default Categories;