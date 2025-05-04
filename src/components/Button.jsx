import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary", // primary | secondary | outline
  className = "",
  ...props
}) => {
  const baseStyles = "px-6 py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-white text-[#111111] hover:bg-[#111111] hover:text-white  hover:border hover:border-white ",
    secondary: "bg-black text-white hover:bg-gray-100 hover:text-black hover:border",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
