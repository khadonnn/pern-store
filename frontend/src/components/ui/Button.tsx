import React, { ElementType } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link" | "info" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", as: Component = "button", ...props }, ref) => {
    const variantClass = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      link: "btn-link",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
    }[variant] || "btn-primary";

    const sizeClass = {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    }[size] || "btn-md";

    return (
      <Component className={`btn ${variantClass} ${sizeClass} ${className}`} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button };
