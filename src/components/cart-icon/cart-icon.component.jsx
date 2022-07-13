import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { ItemCount, CartIconContainer } from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { dropdownStatus, setDropdownStatus } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconContainer
      onClick={() => {
        setDropdownStatus(!dropdownStatus);
      }}
    >
      <ShoppingBag />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
