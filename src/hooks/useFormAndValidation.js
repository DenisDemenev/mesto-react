import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [isValid, setValid] = useState(true);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setValid(e.target.closest('form').checkValidity());
    setErrors({ ...errors, [name]: e.target.validationMessage });
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
    setValid(false);
  }, [setValues, setErrors, setValid]);

  return {
    values,
    setValues,
    isValid,
    handleChange,
    errors,
    resetForm,
  };
}
