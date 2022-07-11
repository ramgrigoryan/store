import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.componens";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const keysArray = Object.keys(categoriesMap);

  return (
    <div className="shop-container">
      {keysArray.map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
