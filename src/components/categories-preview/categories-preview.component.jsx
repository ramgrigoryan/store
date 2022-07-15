import CategoryPreview from "../category-preview/category-preview.componens";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector((store) => store.categories);
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
