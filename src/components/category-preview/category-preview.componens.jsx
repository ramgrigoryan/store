import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";
import Product from "../product/product.component";
import { Link } from "react-router-dom";
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((prod, idx) => idx < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
