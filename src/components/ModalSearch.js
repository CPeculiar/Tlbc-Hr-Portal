import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';

const ModalSearch = ({ id, searchId, modalOpen, setModalOpen }) => {
  const modalContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Focus search input on modal open
  useEffect(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);

  return React.createElement(
    React.Fragment,
    null,

     // Modal backdrop
    React.createElement(Transition, {
      className: "fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity",
      show: modalOpen,
      enter: "transition ease-out duration-200",
      enterStart: "opacity-0",
      enterEnd: "opacity-100",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      "aria-hidden": "true"
    }),

    // Modal dialog
    React.createElement(
      Transition,
      {
        id: id,
        className: "fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6",
        role: "dialog",
        "aria-modal": "true",
        show: modalOpen,
        enter: "transition ease-in-out duration-200",
        enterStart: "opacity-0 translate-y-4",
        enterEnd: "opacity-100 translate-y-0",
        leave: "transition ease-in-out duration-200",
        leaveStart: "opacity-100 translate-y-0",
        leaveEnd: "opacity-0 translate-y-4"
      },
      React.createElement(
        "div",
        {
          ref: modalContent,
          className: "bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700/60 overflow-auto max-w-2xl w-full max-h-full rounded-lg shadow-lg"
        },

        // Search form
        React.createElement(
          "form",
          { className: "border-b border-gray-200 dark:border-gray-700/60" },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement(
              "label",
              { htmlFor: searchId, className: "sr-only" },
              "Search"
            ),
            React.createElement("input", {
              id: searchId,
              className: "w-full dark:text-gray-300 bg-white dark:bg-gray-800 border-0 focus:ring-transparent placeholder-gray-400 dark:placeholder-gray-500 appearance-none py-3 pl-10 pr-4",
              type: "search",
              placeholder: "Search Anything…",
              ref: searchInput
            }),
            React.createElement(
              "button",
              {
                className: "absolute inset-0 right-auto group",
                type: "submit",
                "aria-label": "Search"
              },
              React.createElement(
                "svg",
                {
                  className: "shrink-0 fill-current text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 ml-4 mr-2",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                React.createElement("path", {
                  d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                }),
                React.createElement("path", {
                  d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                })
              )
            )
          )
        ),
        
             // Content area
        React.createElement(
          "div",
          { className: "py-4 px-2" },
          // Recent searches section
          React.createElement(
            "div",
            { className: "mb-3 last:mb-0" },
            React.createElement(
              "div",
              { className: "text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-2" },
              "Recent searches"
            ),
            React.createElement(
              "ul",
              { className: "text-sm" },
              [
                "Attendance Report for 11/08/24",
                "TLBC'24 Pre Conference Report",
                "Financial Report for 3rd Synod",
                "TLBC'24 Budget",
                "Media Report for 3rd Synod 2024",
                "TLBCM'24 Camp Meeting Report"
              ].map((searchItem, index) =>
                React.createElement(
                  "li",
                  { key: index },
                  React.createElement(
                    Link,
                    {
                      className: "flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg",
                      to: "#0",
                      onClick: () => setModalOpen(!modalOpen)
                    },
                    React.createElement(
                      "svg",
                      {
                        className: "fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-3",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                      },
                      React.createElement("path", {
                        d: "M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"
                      })
                    ),
                    React.createElement(
                      "span",
                      null,
                      searchItem
                    )
                  )
                )
              )
            )
          ),


            // Recent pages section
          React.createElement(
            "div",
            { className: "mb-3 last:mb-0" },
            React.createElement(
              "div",
              { className: "text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-2" },
              "Recent pages"
            ),
            React.createElement(
              "ul",
              { className: "text-sm" },
              [
                {
                  title: "Messages",
                  path: "Conversation / … / TLBC'24"
                },
                {
                  title: "Messages",
                  path: "Conversation / … / CEO's Office"
                }
              ].map((pageItem, index) =>
                React.createElement(
                  "li",
                  { key: index },
                  React.createElement(
                    Link,
                    {
                      className: "flex items-center p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/20 rounded-lg",
                      to: "#0",
                      onClick: () => setModalOpen(!modalOpen)
                    },
                    React.createElement(
                      "svg",
                      {
                        className: "fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-3",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16"
                      },
                      React.createElement("path", {
                        d: "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"
                      })
                    ),
                    React.createElement(
                      "span",
                      null,
                      React.createElement(
                        "span",
                        { className: "font-medium" },
                        pageItem.title
                      ),
                      " - ",
                      React.createElement(
                        "span",
                        { className: "text-gray-600 dark:text-gray-400" },
                        pageItem.path
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

export default ModalSearch;