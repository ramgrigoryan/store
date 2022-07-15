import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCollectionAndDocs } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/features/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocs();
      dispatch(setCategories(categoryMap));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
