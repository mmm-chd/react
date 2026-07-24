import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 md:p-4">
      <div className="relative flex w-full  md:max-w-340 overflow-hidden md:rounded-3xl bg-white shadow-2xl md:max-h-190">
        {children}
      </div>
    </main>
  );
};
