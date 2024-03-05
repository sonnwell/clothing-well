import React from "react";
import DirectoryItem from "../directory-item/directoryItem";
import "./Directory.scss";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Shoes",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
    route: "shop/mens",
  },
];
function Directory() {
  return (
    <div className="container">
      <div className="directory-container">
        {categories.map((category) => {
          return <DirectoryItem key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}

export default Directory;
