import { useNavigate } from "react-router-dom";
import "./DirectoryItem.scss";

function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
