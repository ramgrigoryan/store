import { ProductContainer, Footer, Price, Name } from "./product.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addItemsToCart } = useContext(CartContext);
  const clickHandler = () => {
    addItemsToCart(product);
  };
  const { name, price, imageUrl } = product;
  return (
    <ProductContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={clickHandler}>
        Add to Card
      </Button>
    </ProductContainer>
  );
};

export default Product;
