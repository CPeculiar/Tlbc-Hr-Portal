import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  
    return (
      <nav className="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center z-2">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">My Dashboard</h1>
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 rounded focus:outline-none"
        >
          {theme === 'light' ? '🌞' : '🌜'}
        </button>
      </nav>
    );
  };
  
  export default Navbar;
