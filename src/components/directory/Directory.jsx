import React from "react";
import DirectoryItem from "../directory-item/directoryItem";
import "./Directory.scss";

const categories = [
  {
    id: 1,
    title: "Wetsuits",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1683129832336-b4a718820673?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Surf Boards",
    imageUrl:
      "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=3603&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Accessories",
    imageUrl:
      "https://images.unsplash.com/photo-1566421966482-ad8076104d8e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl:
      "https://images.unsplash.com/photo-1455819760800-d2aa223b237a?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=3601&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
