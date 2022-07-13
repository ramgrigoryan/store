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
  const { cartItems, cartTotal } = useContext(CartContext);

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
      <Total>{cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
