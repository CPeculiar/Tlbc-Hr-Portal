// import * as React from 'react';

// const ThemeContext = React.createContext({
//   currentTheme: 'light',
//   changeCurrentTheme: () => {},
// });

// export default function ThemeProvider({children}) {  
//   const persistedTheme = localStorage.getItem('theme');
//   const [theme, setTheme] = React.useState(persistedTheme || 'light');

//   const changeCurrentTheme = (newTheme) => {
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   React.useEffect(() => {
//     document.documentElement.classList.add('[&_*]:!transition-none');
//     if (theme === 'light') {
//       document.documentElement.classList.remove('dark');
//       document.documentElement.style.colorScheme = 'light';
//     } else {
//       document.documentElement.classList.add('dark');
//       document.documentElement.style.colorScheme = 'dark';
//     }

//     const transitionTimeout = setTimeout(() => {
//       document.documentElement.classList.remove('[&_*]:!transition-none');
//     }, 1);
    
//     return () => clearTimeout(transitionTimeout);
//   }, [theme]);

//   return (
//     <>
//     <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
//       {children}
//     </ThemeContext.Provider>
//     </>
//   );
// }

// export const useThemeProvider = () => React.useContext(ThemeContext);



import * as React from 'react';
import { useState } from 'react';

const ThemeContext = React.createContext({
  currentTheme: 'light',
  changeCurrentTheme: () => {},
});


export function ThemeProvider({ children }) {
  const persistedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(persistedTheme || 'light');

  const changeCurrentTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  React.useEffect(() => {
    document.documentElement.classList.add('[&_*]:!transition-none');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }

    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none');
    }, 1);

    return () => clearTimeout(transitionTimeout);
  }, [theme]);

  return React.createElement(
    ThemeContext.Provider,
    { value: { currentTheme: theme, changeCurrentTheme } },
    children
  );
}

export const useThemeProvider = () => useContext(ThemeContext);
