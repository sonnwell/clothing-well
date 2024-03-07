import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CategoryPreview.scss";
import ProductCard from "../product-card/ProductCard";

const CategoryPreview = ({ title, products }) => {
  const [numOfProducts, setNumOfProducts] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setNumOfProducts(2);
      } else {
        setNumOfProducts(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="category-preview-container">
      <h2 className="text-uppercase mt-5 mb-3">
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < numOfProducts)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
