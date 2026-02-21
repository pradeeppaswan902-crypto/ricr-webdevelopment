import React from "react";

const Card = ({
  children,
  className = "",
  title = "",
  footer = "",
  onClick = null,
  hover = true,
}) => {
  const defaultClassName = "bg-white rounded-lg shadow-md p-6";
  const hoverClassName = hover ? "hover:shadow-lg transition-shadow" : "";

  return (
    <div
      className={`${defaultClassName} ${hoverClassName} ${className}`}
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : {}}
    >
      {title && (
        <h3 className="text-xl font-bold text-(--color-primary) mb-4">
          {title}
        </h3>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
