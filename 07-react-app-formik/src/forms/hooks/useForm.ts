import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState(initialValues);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  const reset = () => {
    setFormData({ ...initialValues });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    ...formData,
    formData,
    onChange,
    reset,
    isValidEmail,
  };
};
