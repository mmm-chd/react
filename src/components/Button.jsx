import React from "react";

export const Button = ({ type = "button", text = "", loading = false }) => {
  return (
    <div>
      <button
        type={type}
        disabled={loading}
        className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-white"
      >
        {loading ? "Memuat..." : text}
      </button>
    </div>
  );
};
