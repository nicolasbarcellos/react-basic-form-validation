import { useState, useEffect } from "react";

export default function useForm(validateInfo) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  console.log(values);

  function handleSubmit(e) {
    e.preventDefault();

    setErrors(validateInfo(values));
    setIsSubmitting(true);
  }

  return { handleChange, values, handleSubmit, errors };
}
