import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {SignUpContainer} from "./sign-up-form.styles.jsx";
import Button from "../button/button.component";

const initialData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(initialData);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setformFields(initialData);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account yet?</h2>
      <span>Sign Up</span>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
          }
          try {
            const { user } = await createAuthUserWithEmailAndPassword(
              email,
              password
            );
            createUserDocumentFromAuth(user, { displayName });
            resetFormField();
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              alert("Email already in use");
              return;
            }
            console.log("Error came from here " + error);
          }
        }}
      >
        <FormInput
          label="Username"
          type="text"
          onChange={changeHandler}
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={changeHandler}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={changeHandler}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
