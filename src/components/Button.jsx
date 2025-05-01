import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary", // primary | secondary | outline
  className = "",
  ...props
}) => {
  const baseStyles = "px-6 py-2 rounded-md font-semibold transition-all cursor-pointer";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-900 hover:text-white  hover:border hover:border-white ",
    secondary: "bg-black text-white hover:bg-gray-800",
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
