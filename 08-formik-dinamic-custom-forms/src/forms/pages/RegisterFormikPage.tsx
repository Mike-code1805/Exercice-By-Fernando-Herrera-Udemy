import { Form, Formik } from "formik";
import { MyTextInput } from "../components";
import { registerValidation } from "../validations/registerValidation";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={registerValidation}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Fernando" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="john@google.com"
            />

            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="******"
            />

            <MyTextInput
              label="Confirm password"
              name="confirmPassword"
              type="password"
              placeholder="******"
            />

            <button type="submit">Create</button>

            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
