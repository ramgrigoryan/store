import { createContext, useState } from "react";

const addCardItems = (cartItems, productToAdd) => {
  const newItems = Array.from(cartItems);
  for (let i = 0; i < newItems.length; i++) {
    if (newItems[i].name === productToAdd.name) {
      newItems[i].quantity++;
      return newItems;
    }
  }
  productToAdd.quantity = 1;
  newItems.push(productToAdd);
  return newItems;
};

const mutateQuantityOfItems = (cartItems, productToMutate, incOrDec) => {
  const newArray = cartItems.map((item) => {
    if (item.id === productToMutate.id) {
      if (incOrDec) {
        item.quantity++;
      } else {
        item.quantity--;
      }
    }
    return item;
  });
  return newArray.filter((item) => item.quantity);
};

export const CartContext = createContext({
  dropdownStatus: false,
  setDropdownStatus: () => null,
  cartItems: [],
  addItemsToCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemsToCart = (productToAdd) => {
    setCartItems(addCardItems(cartItems, productToAdd));
  };
  const mutateItemsQuantity = (productToMutate, incOrDec) => {
    setCartItems(mutateQuantityOfItems(cartItems, productToMutate, incOrDec));
  };
  const removeItem = (removeId) => {
    setCartItems(cartItems.filter((item) => item.id !== removeId));
  };
  const value = {
    dropdownStatus,
    setDropdownStatus,
    cartItems,
    addItemsToCart,
    mutateItemsQuantity,
    removeItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
