import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
  px?: string;
  href?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  white,
  px,
  href,
  onClick,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
