import React from "react";

const Card = ({ children, className = "bg-white rounded-xl relative" }) => {
  return <div className={`shadow-md ${className}`}>{children}</div>;
};

export { Card };
