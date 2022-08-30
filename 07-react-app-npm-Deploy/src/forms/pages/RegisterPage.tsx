import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { DataUserForm } from "../interfaces/forms.interfaces";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password,
    confirmPassword,
    onChange,
    reset,
    isValidEmail,
  } = useForm<DataUserForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Name is not valid</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email is not valid</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>This field is required</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>The password must have 6 letters</span>
        )}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Password Verification"
          value={confirmPassword}
          onChange={onChange}
        />
        {confirmPassword.trim().length <= 0 && (
          <span>This field is required</span>
        )}
        {confirmPassword.trim().length > 0 && password !== confirmPassword && (
          <span>Passwords must match</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
