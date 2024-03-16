'use client'
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <>
      <button
        className={`flexCenter gap-3 rounded-full border ${variant} ${
          full && "w-full"
        }`}
        type={type}
      >
        {icon && <img src={icon} alt={title} width={24} height={24} />}
        <p className="bold-16 whitespace-nowrap"> {title} </p>
      </button>
    </>
  );
};

export default Button;