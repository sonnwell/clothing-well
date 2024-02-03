import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
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

  const handleSubmit = () => {
    resetFormFields();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="container d-flex justify-content-center my-5 py-5">
      <div className="sign-in-container">
        <h1>LOGIN</h1>
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
          <a href="#" className="d-block mb-3">Create an account.</a>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
