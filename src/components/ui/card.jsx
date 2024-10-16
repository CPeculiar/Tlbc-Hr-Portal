import React from 'react';

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ title, subtitle, className }) => (
  <div className={`border-b pb-4 mb-4 ${className}`}>
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`text-gray-700 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-medium text-gray-800 ${className}`}>{children}</h3>
);

export { Card, CardHeader, CardContent, CardTitle };
