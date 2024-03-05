import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <ArrowLeft onClick={removeItemHandler} style={{ cursor: "pointer" }}/>
        {quantity}
        <ArrowRight onClick={addItemHandler} style={{ cursor: "pointer" }}/>
      </div>
      <span className="price">${price}</span>
      <a href="#" className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </a>
    </div>
  );
};

export default CheckoutItem;
