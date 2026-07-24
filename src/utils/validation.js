export const validateLoginForm = (email, password) => {
  const newErrors = {};

  if (!email) {
    newErrors.email = "Email wajib diisi!";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Format email tidak valid!";
  }

  if (!password) {
    newErrors.password = "Password wajib diisi!";
  } else if (password.length < 6) {
    newErrors.password = "Password minimal 6 karakter";
  }

  return newErrors;
};
