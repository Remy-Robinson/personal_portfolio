import React from "react";

const Card = ({ title, description, children, isDark = true }) => {
  return (
    <div
      className={`border-rounded 2 shadow-lg p-6 mb-6 transition-transform transform hover:-translate-y-1 hover:shadow-2xl animate-fade-in ${
        isDark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <h3
        className={`text-2xl font-bold mb-3 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-md mb-4 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {description}
      </p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
