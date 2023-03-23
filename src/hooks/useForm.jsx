import { useState } from "react";

function useForm(initialForm, validate, actionForm) {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // hacer algo con los datos del formulario si no hay errores de validación
      actionForm(values);
    } else {
      console.log(errors);
    }
  };

  const resetForm = () => {
    setValues(initialForm);
    setErrors({});
  };

  const isFieldValid = (name) => {
    return !errors[name];
  };

  const isFormValid = () => {
    return Object.keys(errors).length === 0;
  };

  const getErrorMessage = (name) => {
    return errors[name] || "";
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    isFieldValid,
    isFormValid,
    getErrorMessage,
  };
}

export default useForm;
