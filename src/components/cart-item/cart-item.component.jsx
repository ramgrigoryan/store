import {CartItemContainer,ItemDetails,Name} from "./cart-item.styles.jsx";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name as='span'>{name}</Name>
        <Name as='span'>{quantity} x ${price}</Name>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
