import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.Context";

import "./CartDropdown.scss";
import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
