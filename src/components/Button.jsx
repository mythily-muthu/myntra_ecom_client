import React from "react";

const Button = ({
  name,
  bgColor = "bg-primary",
  textColor = "text-white",
  click,
  width = "w-max",
  radius = "rounded-sm",
  border = "",
  font = "font-normal",
  text = "text-base",
  type,
}) => {
  return (
    <button
      className={`h-12 active:scale-95 transition-all duration-100 ease-out active:brightness-90 px-4 py-2 ${bgColor} ${text} ${font} ${width} ${textColor} ${radius} ${border}`}
      onClick={click}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
