import {
  CheckoutItemContainer,
  ImgaeContainer,
  NamePrice,
  Quantity,
  Arrow,
  Value,
  RemoveBtn,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
  const { mutateItemsQuantity, removeItem } = useContext(CartContext);
  const changeQuantity = (item, incOrDec) => {
    mutateItemsQuantity(item, incOrDec);
  };
  const removeItemHandler = (removeId) => {
    removeItem(removeId);
  };
  const { name, quantity, imageUrl, price, id } = item;
  return (
    <CheckoutItemContainer>
      <ImgaeContainer>
        <img src={imageUrl} alt={name} />
      </ImgaeContainer>
      <NamePrice>{name}</NamePrice>
      <Quantity>
        <Arrow onClick={changeQuantity.bind(this, item, false)}>&#10094;</Arrow>
        <Value as="span">{quantity}</Value>
        <Arrow onClick={changeQuantity.bind(this, item, true)}>&#10095;</Arrow>
      </Quantity>
      <NamePrice>${price}</NamePrice>
      <RemoveBtn onClick={removeItemHandler.bind(this, id)}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
