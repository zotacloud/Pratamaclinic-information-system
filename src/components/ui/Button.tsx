import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-medium transition duration-200
      bg-blue-600 text-white
      hover:bg-blue-700
      disabled:opacity-50
      ${className}`}
    >
      {children}
    </button>
  );
}
