import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  HeaderBlockLastChild,
  Total,
} from "./checkout.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const countTotal = (itemList) => {
    return itemList.reduce((total, current) => {
      return (total += current.quantity * current.price);
    }, 0);
  };

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlockLastChild>
          <span>Delete</span>
        </HeaderBlockLastChild>
      </Header>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <Total>${countTotal(cartItems)}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
