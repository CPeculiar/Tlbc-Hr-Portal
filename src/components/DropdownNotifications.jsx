import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';

function DropdownNotifications({
  align
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ${dropdownOpen && 'bg-gray-200 dark:bg-gray-800'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg
          className="fill-current text-gray-500/80 dark:text-gray-400/80"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C10.067 2 8.5 3.567 8.5 5.5V6c-2.485 0-4.5 2.015-4.5 4.5v4.5l-2 2V18h19v-.5l-2-2V10.5c0-2.485-2.015-4.5-4.5-4.5V5.5C15.5 3.567 13.933 2 12 2zm0 18c-1.104 0-2-.896-2-2h4c0 1.104-.896 2-2 2z" />
        </svg>
        {/* Unread notification badge */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></div>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${align === 'right' ? 'right-0' : 'left-0'}`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-4">Notifications</div>
          <ul>
            <li className="border-b border-gray-200 dark:border-gray-700/60 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700/20"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm mb-2">📣 <span className="font-medium text-gray-800 dark:text-gray-100">Incomplete Profile information</span> Complete the different information sections in your profile.</span>
                <span className="block text-xs font-medium text-gray-400 dark:text-gray-500">Feb 12, 2024</span>
              </Link>
            </li>
            <li className="border-b border-gray-200 dark:border-gray-700/60 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700/20"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
              <span className="block text-sm mb-2">🚀<span className="font-medium text-gray-800 dark:text-gray-100">Yet to register for TLBC'24!</span> <br/>You are yet to register for TLBC'24. Do so now.</span>
              <span className="block text-xs font-medium text-gray-400 dark:text-gray-500">Jan 24, 2024</span>
               
              </Link>
            </li>
            <li className="border-b border-gray-200 dark:border-gray-700/60 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-700/20"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm mb-2">📣 <span className="font-medium text-gray-800 dark:text-gray-100">Late submission of your Report</span> <br/>You are already behind deadline in the submission of your report.</span>
                <span className="block text-xs font-medium text-gray-400 dark:text-gray-500">Feb 9, 2024</span> 
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default DropdownNotifications;