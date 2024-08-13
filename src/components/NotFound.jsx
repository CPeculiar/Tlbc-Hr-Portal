import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1> 
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <Link to={`/`} >
        <button className="btn btn-primary btn-lg shadow-sm">
          Click here to go back to Home.
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
