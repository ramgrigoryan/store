import { createContext, useReducer } from "react";

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
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setDropdownStatus: () => null,
  addItemsToCart: () => null,
  mutateItemsQuantity: () => null,
  removeItem: () => null,
});

const REDUCER_TYPES = {
  TOGGLE_REDUCER: "TOGGLE_REDUCER",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  dropdownStatus: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case REDUCER_TYPES.TOGGLE_REDUCER:
      return !state;
    case REDUCER_TYPES.SET_CART_ITEMS:
      return payload;
    default:
      throw new Error(`Unhandeled type - ${type} in cartReducer!!!`);
  }
};

export const CartProvider = ({ children }) => {
  const [dropdownStatus, dispatchDropDown] = useReducer(cartReducer, false);

  const setDropdownStatus = () => {
    dispatchDropDown({
      type: REDUCER_TYPES.TOGGLE_REDUCER,
    });
  };
  // const [dropdownStatus, setDropdownStatus] = useState(false);

  const [{ cartCount, cartItems, cartTotal }, dispatchCartItems] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cur) => (total += cur.quantity),
      0
    );
    const newCartTotal = newCartItems.reduce((total, current) => {
      return (total += current.quantity * current.price);
    }, 0);
    dispatchCartItems({
      type: REDUCER_TYPES.SET_CART_ITEMS,
      payload: {
        cartCount: newCartCount,
        cartTotal: newCartTotal,
        cartItems: newCartItems,
      },
    });
  };
  // const [cartItems, setCartItems] = useState([]);
  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCardItems(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const mutateItemsQuantity = (productToMutate, incOrDec) => {
    const newCartItems = mutateQuantityOfItems(
      cartItems,
      productToMutate,
      incOrDec
    );
    updateCartItemsReducer(newCartItems);
  };
  const removeItem = (removeId) => {
    const newCartItems = cartItems.filter((item) => item.id !== removeId);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    dropdownStatus,
    setDropdownStatus,
    cartItems,
    cartTotal,
    addItemsToCart,
    mutateItemsQuantity,
    removeItem,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
