import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { Link } from "react-router-dom";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import "./SignIn.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log("Signed in successfully");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="container d-flex justify-content-center my-5 py-5">
      <div className="sign-in-container">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <Link to="/auth/sign-up">Create an account.</Link>
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            buttonType="inverted"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
