import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import {getData, storeData} from '../utils/AsyncStorage';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const value = await getData('isDarkMode');
        if (value !== null) {
          setIsDarkMode(value === 'true');
        }
      } catch (e) {
        console.error('Failed to load theme:', e);
      }
    };
    loadTheme();
  }, [isDarkMode]);

  const toggleTheme = async () => {
    await storeData('isDarkMode', String(!isDarkMode));
    return setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
