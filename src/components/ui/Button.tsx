import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "red" | "yellow" | "navy" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "red",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-bold transition-all duration-200 active:scale-[0.98] select-none rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  }[size];

  const variantClasses = {
    red: "bg-red-brand text-white hover:bg-red-brand-hover shadow-red-cta focus:ring-red-brand",
    yellow: "bg-yellow-brand text-navy-deep hover:bg-yellow-brand-hover shadow-yellow-cta focus:ring-yellow-brand font-extrabold",
    navy: "bg-navy text-white hover:bg-navy-light shadow-brand focus:ring-navy",
    outline: "border-2 border-navy/20 bg-white text-navy hover:bg-navy-50 hover:border-navy focus:ring-navy",
    ghost: "text-navy hover:bg-navy-50 focus:ring-navy",
  }[variant];

  const fullClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        className={fullClasses}
      >
        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={fullClasses} {...props}>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
