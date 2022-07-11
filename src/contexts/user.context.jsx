import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
//Actual value to access
//Context needs initial/Default Value for itself
//We have to create base state of what context is goind to be
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//actual component
//provider provides to all its children access the values inside of it's useState
//We want to be able to call setter and get the value anywhere inside of the component tree
//that is nested within this actual provider value.
// user provider is solely meant to tell us, Oh, inside of my component tree which components have access to my context.
export const UserProvider = ({ children }) => {
  //we want to store User object
  //current user gets both the actual value but also the setter function.
  const [currentUser, setCurrentUser] = useState(null);

  //Generate value to pass to Provider. It's going to be an object that passes 2 values
  const value = { currentUser, setCurrentUser }; //Both setter function and actual value
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
