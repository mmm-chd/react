import React, { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { useLogin } from "../hooks/useLogin";
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const { formData, loading, errors, handleChange, handleSubmit } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <div className="absolute inset-0 z-0 md:w-1/2">
        <img
          src="/img/cover.png"
          alt="Cover Logo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 md:hidden" />
      </div>

      {errors?.general && (
        <div className="mb-4 rounded-lg bg-red-100 p-3 text-xs text-red-600">
          {errors.general}
        </div>
      )}

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-6 md:ml-auto md:w-1/2 md:p-12 md:bg-white">
        <div className="flex-col items-center w-full max-w-md rounded-2xl  p-6 md:p-0 ">
          <img
            src="/img/logo.png"
            alt="Brand Logo"
            className="w-full mb-6 h-28 object-contain"
          />

          <h2 className="text-2xl font-medium text-white text-center md:text-gray-800 mb-20 ">
            Selamat Datang Kembali!
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                text="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                text="Password"
                value={formData.password}
                onChange={handleChange}
                suffix={
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                }
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password}</p>
              )}
            </div>

            <p className="w-full h-min underline font-medium text-xs text-end cursor-pointer mb-20 text-white md:text-gray-700 ">
              Lupa Password?
            </p>

            <Button type="submit" loading={loading} text="Masuk" />

            <p className="text-center text-xs font-medium">
              <span className="text-secondary">Belum punya akun? </span>
              <button
                type="button"
                onClick={() => null}
                className="underline text-white md:text-gray-700 cursor-pointer"
              >
                Daftar di sini
              </button>
            </p>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
