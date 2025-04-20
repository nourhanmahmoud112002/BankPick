import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Define the type for your context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// 2. Provide a default value (will be overridden by Provider)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Create a provider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 4. Create a custom hook with proper type safety
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
