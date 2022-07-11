import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";

const initialData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(initialData);
  const { email, password } = formFields;

  const resetFormField = () => {
    setformFields(initialData);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In</span>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { user } = await signInAuthUserWithEmailAndPassword(
              email,
              password
            );
            resetFormField();
          } catch (error) {
            switch (error.code) {
              case "auth/user-not-found":
                alert("No user with this email");
                break;
              case "auth/wrong-password":
                alert("Wrong password");
                break;
              case "auth/too-many-requests":
                alert("To many login attempts. Please,try later");
                break;
              default:
                alert(error.code);
            }
            console.log(error);
          }
        }}
      >
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
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
