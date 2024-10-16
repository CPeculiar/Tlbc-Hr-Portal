import React from 'react';

const Alert = ({ children, type = 'info', className }) => {
  const baseStyles = "p-4 rounded-md flex items-start space-x-4";
  const typeStyles = {
    info: "bg-blue-50 text-blue-800 border border-blue-300",
    success: "bg-green-50 text-green-800 border border-green-300",
    warning: "bg-yellow-50 text-yellow-800 border border-yellow-300",
    error: "bg-red-50 text-red-800 border border-red-300",
  };

  return (
    <div className={`${baseStyles} ${typeStyles[type]} ${className}`}>
      {children}
    </div>
  );
};

const AlertDescription = ({ children, className }) => (
  <div className={`text-sm ${className}`}>{children}</div>
);

export { Alert, AlertDescription };
