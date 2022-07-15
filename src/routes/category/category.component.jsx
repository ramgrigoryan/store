import { CategoryContainer, Title } from "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports.js";
import Product from "../../components/product/product.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector((state) => state.categories);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );
  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
