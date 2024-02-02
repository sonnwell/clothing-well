import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./Directory.scss";

function Directory({ categories }) {
  return (
    <div className="container">
      <div className="directory-container mt-5">
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}

export default Directory;
