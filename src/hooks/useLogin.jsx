import React, { useState } from "react";
import { validateLoginForm } from "../utils/validation";

export const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(
      formData.email,
      formData.password,
    );

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      localStorage.setItem("email", formData.email);
      localStorage.setItem("loginAt", Date.now());
      alert(`Login Berhasil! Selamat datang ${formData.email}`);
      console.log("Login berhasil");
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };
  return { formData, loading, errors, handleChange, handleSubmit };
};
